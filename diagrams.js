// ===== GEOMETRY DIAGRAM GENERATORS =====
// Produces inline SVG strings for geometry questions (W9-W11).
// Usage: add  diagram: { type: "angle", angle: 55 }  to any question object.
// The game engine calls  renderDiagram(prob.diagram)  if the field exists.

var GeoDiagram = (function () {
  "use strict";

  var W = 220, H = 180; // default SVG viewport
  var RAD = Math.PI / 180;

  // ── Palette ──
  var C = {
    line: "#e2c46d",      // gold lines
    fill: "rgba(226,196,109,0.12)", // translucent gold fill
    arc: "#64d8f0",       // cyan arc
    label: "#ffffff",     // white labels
    dim: "#aaa",          // dim labels
    accent: "#f06464",    // red accent
    dashed: "#888",       // dashed lines
    right: "#64d8f0",     // right-angle marker
    tick: "#e2c46d",      // tick marks
  };

  function svgOpen(w, h, cls) {
    w = w || W; h = h || H;
    return '<svg class="geo-svg' + (cls ? ' ' + cls : '') + '" viewBox="0 0 ' + w + ' ' + h +
      '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="geometry diagram">';
  }
  function svgClose() { return '</svg>'; }

  function text(x, y, txt, opts) {
    opts = opts || {};
    var fill = opts.fill || C.label;
    var size = opts.size || 13;
    var anchor = opts.anchor || 'middle';
    var bold = opts.bold ? ' font-weight="bold"' : '';
    return '<text x="' + x + '" y="' + y + '" fill="' + fill + '" font-size="' + size +
      '" text-anchor="' + anchor + '"' + bold + ' font-family="inherit">' + txt + '</text>';
  }

  function line(x1, y1, x2, y2, opts) {
    opts = opts || {};
    var stroke = opts.stroke || C.line;
    var sw = opts.sw || 2;
    var dash = opts.dash ? ' stroke-dasharray="6,4"' : '';
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 +
      '" stroke="' + stroke + '" stroke-width="' + sw + '"' + dash + ' stroke-linecap="round"/>';
  }

  function circle(cx, cy, r, opts) {
    opts = opts || {};
    var stroke = opts.stroke || C.line;
    var fill = opts.fill || 'none';
    var sw = opts.sw || 2;
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill +
      '" stroke="' + stroke + '" stroke-width="' + sw + '"/>';
  }

  function polygon(pts, opts) {
    opts = opts || {};
    var stroke = opts.stroke || C.line;
    var fill = opts.fill || C.fill;
    var sw = opts.sw || 2;
    var d = pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' ');
    return '<polygon points="' + d + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw +
      '" stroke-linejoin="round"/>';
  }

  // Arc path for angle indicator
  function arcPath(cx, cy, r, startDeg, endDeg) {
    var s = startDeg * RAD, e = endDeg * RAD;
    var x1 = cx + r * Math.cos(s), y1 = cy - r * Math.sin(s);
    var x2 = cx + r * Math.cos(e), y2 = cy - r * Math.sin(e);
    var large = (endDeg - startDeg > 180) ? 1 : 0;
    return '<path d="M' + x1 + ',' + y1 + ' A' + r + ',' + r + ' 0 ' + large + ' 0 ' + x2 + ',' + y2 +
      '" fill="none" stroke="' + C.arc + '" stroke-width="2"/>';
  }

  // Filled arc sector
  function arcSector(cx, cy, r, startDeg, endDeg, fillColor) {
    var s = startDeg * RAD, e = endDeg * RAD;
    var x1 = cx + r * Math.cos(s), y1 = cy - r * Math.sin(s);
    var x2 = cx + r * Math.cos(e), y2 = cy - r * Math.sin(e);
    var large = (endDeg - startDeg > 180) ? 1 : 0;
    return '<path d="M' + cx + ',' + cy + ' L' + x1 + ',' + y1 + ' A' + r + ',' + r + ' 0 ' + large + ' 0 ' + x2 + ',' + y2 + ' Z"' +
      ' fill="' + (fillColor || 'rgba(100,216,240,0.15)') + '" stroke="none"/>';
  }

  // Right-angle square marker
  function rightAngleMark(cx, cy, dir1Deg, dir2Deg, size) {
    size = size || 12;
    var d1 = dir1Deg * RAD, d2 = dir2Deg * RAD;
    var ax = cx + size * Math.cos(d1), ay = cy - size * Math.sin(d1);
    var bx = ax + size * Math.cos(d2), by = ay - size * Math.sin(d2);
    var dx = cx + size * Math.cos(d2), dy = cy - size * Math.sin(d2);
    return '<path d="M' + ax + ',' + ay + ' L' + bx + ',' + by + ' L' + dx + ',' + dy +
      '" fill="none" stroke="' + C.right + '" stroke-width="1.5"/>';
  }

  // Tick mark on a line segment midpoint
  function tickMark(x1, y1, x2, y2, count) {
    count = count || 1;
    var mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    var dx = x2 - x1, dy = y2 - y1;
    var len = Math.sqrt(dx * dx + dy * dy);
    var nx = -dy / len * 6, ny = dx / len * 6; // perpendicular
    var out = '';
    for (var i = 0; i < count; i++) {
      var off = (i - (count - 1) / 2) * 4;
      var ox = dx / len * off, oy = dy / len * off;
      out += line(mx + ox + nx, my + oy + ny, mx + ox - nx, my + oy - ny, { stroke: C.tick, sw: 1.5 });
    }
    return out;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: angle
  // Shows a single angle with arc and label
  // params: { angle: degrees, label?: string }
  // ══════════════════════════════════════════
  function drawAngle(p) {
    var deg = p.angle || 45;
    var lbl = p.label !== undefined ? p.label : deg + '\u00B0';
    var w = 200, h = 160;
    var cx = 40, cy = 130;
    var armLen = 130;
    // One arm horizontal to the right
    var ax = cx + armLen, ay = cy;
    // Other arm at the given angle
    var bx = cx + armLen * Math.cos(deg * RAD);
    var by = cy - armLen * Math.sin(deg * RAD);
    var arcR = deg > 90 ? 28 : 35;
    var mid = deg / 2;
    var lblR = arcR + 16;
    var lx = cx + lblR * Math.cos(mid * RAD);
    var ly = cy - lblR * Math.sin(mid * RAD) + 4;

    var s = svgOpen(w, h);
    s += arcSector(cx, cy, arcR, 0, deg);
    s += line(cx, cy, ax, ay);
    s += line(cx, cy, bx, by);
    s += arcPath(cx, cy, arcR, 0, deg);
    if (deg === 90) {
      s += rightAngleMark(cx, cy, 0, 90);
    }
    s += text(lx, ly, lbl, { fill: C.arc, size: 12, bold: true });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: complementary
  // Two angles summing to 90°
  // params: { a: deg1, b: deg2 }
  // ══════════════════════════════════════════
  function drawComplementary(p) {
    var a = p.a || 35, b = p.b || (90 - a);
    var w = 200, h = 170;
    var cx = 40, cy = 140;
    var armLen = 120;
    var ax = cx + armLen, ay = cy;
    var mx = cx + armLen * Math.cos(a * RAD), my = cy - armLen * Math.sin(a * RAD);
    var bx = cx + armLen * Math.cos(90 * RAD), by = cy - armLen * Math.sin(90 * RAD);
    var arcR = 32;

    var s = svgOpen(w, h);
    s += arcSector(cx, cy, arcR, 0, a, 'rgba(100,216,240,0.15)');
    s += arcSector(cx, cy, arcR, a, 90, 'rgba(240,100,100,0.15)');
    s += line(cx, cy, ax, ay);
    s += line(cx, cy, mx, my);
    s += line(cx, cy, bx, by);
    s += rightAngleMark(cx, cy, 0, 90);
    s += arcPath(cx, cy, arcR, 0, a);
    s += arcPath(cx, cy, arcR + 6, a, 90);
    // Labels
    var lr1 = arcR + 14, mid1 = a / 2;
    s += text(cx + lr1 * Math.cos(mid1 * RAD), cy - lr1 * Math.sin(mid1 * RAD) + 4,
      a + '\u00B0', { fill: C.arc, size: 11, bold: true });
    var lr2 = arcR + 20, mid2 = a + b / 2;
    s += text(cx + lr2 * Math.cos(mid2 * RAD), cy - lr2 * Math.sin(mid2 * RAD) + 4,
      b + '\u00B0', { fill: C.accent, size: 11, bold: true });
    s += text(w / 2, 14, '90\u00B0 total', { fill: C.dim, size: 11 });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: supplementary
  // Two angles on a straight line summing to 180°
  // params: { a: deg1, b: deg2 }
  // ══════════════════════════════════════════
  function drawSupplementary(p) {
    var a = p.a || 120, b = p.b || (180 - a);
    var w = 240, h = 140;
    var cx = 120, cy = 110;
    var armLen = 100;

    var s = svgOpen(w, h);
    // Straight line
    s += line(cx - armLen, cy, cx + armLen, cy);
    // Angle arm
    var bx = cx + armLen * Math.cos(a * RAD), by = cy - armLen * Math.sin(a * RAD);
    s += line(cx, cy, bx, by);
    // Arcs
    var arcR = 30;
    s += arcSector(cx, cy, arcR, 0, a, 'rgba(100,216,240,0.15)');
    s += arcSector(cx, cy, arcR, a, 180, 'rgba(240,100,100,0.15)');
    s += arcPath(cx, cy, arcR, 0, a);
    s += arcPath(cx, cy, arcR + 6, a, 180);
    // Labels
    var mid1 = a / 2, lr1 = arcR + 15;
    s += text(cx + lr1 * Math.cos(mid1 * RAD), cy - lr1 * Math.sin(mid1 * RAD) + 4,
      a + '\u00B0', { fill: C.arc, size: 11, bold: true });
    var mid2 = a + b / 2, lr2 = arcR + 20;
    s += text(cx + lr2 * Math.cos(mid2 * RAD), cy - lr2 * Math.sin(mid2 * RAD) + 4,
      b + '\u00B0', { fill: C.accent, size: 11, bold: true });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: verticalAngles
  // Two intersecting lines showing vertical angles
  // params: { a: degrees }
  // ══════════════════════════════════════════
  function drawVerticalAngles(p) {
    var a = p.a || 70;
    var b = 180 - a;
    var w = 220, h = 170;
    var cx = 110, cy = 85;
    var armLen = 90;

    var s = svgOpen(w, h);
    // Line 1: horizontal
    s += line(cx - armLen, cy, cx + armLen, cy);
    // Line 2: at angle a from horizontal
    var lx1 = cx + armLen * Math.cos(a * RAD), ly1 = cy - armLen * Math.sin(a * RAD);
    var lx2 = cx - armLen * Math.cos(a * RAD), ly2 = cy + armLen * Math.sin(a * RAD);
    s += line(lx2, ly2, lx1, ly1);
    // Arcs for angles
    var arcR = 25;
    s += arcSector(cx, cy, arcR, 0, a, 'rgba(100,216,240,0.15)');
    s += arcPath(cx, cy, arcR, 0, a);
    s += arcSector(cx, cy, arcR, 180, 180 + a, 'rgba(100,216,240,0.15)');
    s += arcPath(cx, cy, arcR, 180, 180 + a);
    // Labels
    s += text(cx + 42 * Math.cos(a / 2 * RAD), cy - 42 * Math.sin(a / 2 * RAD) + 4,
      a + '\u00B0', { fill: C.arc, size: 11, bold: true });
    s += text(cx - 42 * Math.cos(a / 2 * RAD), cy + 42 * Math.sin(a / 2 * RAD) + 4,
      a + '\u00B0', { fill: C.arc, size: 11, bold: true });
    // Adjacent angle labels
    var midAdj = a + b / 2;
    s += text(cx + 42 * Math.cos(midAdj * RAD), cy - 42 * Math.sin(midAdj * RAD) + 4,
      b + '\u00B0', { fill: C.dim, size: 10 });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: triangle
  // General triangle with optional labels
  // params: { sides: [a,b,c], angles: [A,B,C], labels?: [v1,v2,v3], showAngles?: bool }
  // ══════════════════════════════════════════
  function drawTriangle(p) {
    var w = 220, h = 180;
    var sides = p.sides || [0, 0, 0];
    var angles = p.angles || [0, 0, 0];
    var labels = p.labels || ['A', 'B', 'C'];
    // Place triangle: B at bottom-left, C at bottom-right, A at top
    var baseLen = 140;
    var bx = 40, by = 150, cx2 = bx + baseLen, cy2 = 150;
    // A angle at B, B angle at C, C angle at A (or just position A above)
    var topAngle = angles[1] || 60; // angle at bottom-left vertex
    var ax = bx + 80 * Math.cos(topAngle * RAD);
    var ay = by - 100 * Math.sin(topAngle * RAD);

    var s = svgOpen(w, h);
    s += polygon([[ax, ay], [bx, by], [cx2, cy2]]);
    // Vertex labels
    s += text(ax, ay - 8, labels[0], { fill: C.label, size: 12, bold: true });
    s += text(bx - 12, by + 4, labels[1], { fill: C.label, size: 12, bold: true });
    s += text(cx2 + 12, cy2 + 4, labels[2], { fill: C.label, size: 12, bold: true });
    // Side labels
    if (sides[0]) s += text((bx + cx2) / 2, by + 16, '' + sides[0], { fill: C.arc, size: 11 });
    if (sides[1]) s += text((ax + cx2) / 2 + 10, (ay + cy2) / 2, '' + sides[1], { fill: C.arc, size: 11 });
    if (sides[2]) s += text((ax + bx) / 2 - 10, (ay + by) / 2, '' + sides[2], { fill: C.arc, size: 11 });
    // Angle arcs
    if (p.showAngles !== false) {
      if (angles[0]) {
        // Angle at vertex A (top)
        var aDir1 = Math.atan2(by - ay, bx - ax) / RAD;
        var aDir2 = Math.atan2(cy2 - ay, cx2 - ax) / RAD;
        if (aDir1 < 0) aDir1 += 360;
        if (aDir2 < 0) aDir2 += 360;
        var startA = Math.min(aDir1, aDir2), endA = Math.max(aDir1, aDir2);
        if (endA - startA > 180) { var tmp = startA; startA = endA; endA = tmp + 360; }
        // Flip for SVG y-axis
        s += arcPath(ax, ay, 18, 360 - endA, 360 - startA);
        var midA = (startA + endA) / 2;
        s += text(ax + 28 * Math.cos(-midA * RAD), ay - 28 * Math.sin(-midA * RAD) + 4,
          angles[0] + '\u00B0', { fill: C.arc, size: 10 });
      }
      if (angles[1]) {
        s += text(bx + 20, by - 16, angles[1] + '\u00B0', { fill: C.arc, size: 10 });
      }
      if (angles[2]) {
        s += text(cx2 - 20, cy2 - 16, angles[2] + '\u00B0', { fill: C.arc, size: 10 });
      }
    }
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: rightTriangle
  // Right triangle with right-angle marker
  // params: { a: leg1, b: leg2, c: hypotenuse, labelRight?: vertex, showUnknown?: "a"|"b"|"c" }
  // ══════════════════════════════════════════
  function drawRightTriangle(p) {
    var w = 220, h = 180;
    var a = p.a, b = p.b, c = p.c;
    // Right angle at bottom-left: legs along bottom and left side
    var px = 40, py = 150; // right angle vertex (bottom-left)
    var qx = 180, qy = 150; // bottom-right
    var rx = 40, ry = 30;  // top-left

    var s = svgOpen(w, h);
    s += polygon([[px, py], [qx, qy], [rx, ry]]);
    // Right angle marker at P
    s += rightAngleMark(px, py, 0, 90, 14);
    // Label legs and hypotenuse
    var showA = p.showUnknown === 'a' ? '?' : (a || '');
    var showB = p.showUnknown === 'b' ? '?' : (b || '');
    var showC = p.showUnknown === 'c' ? '?' : (c || '');
    // Bottom side (leg a)
    if (showA !== '') s += text((px + qx) / 2, py + 18, '' + showA, { fill: showA === '?' ? C.accent : C.arc, size: 12, bold: showA === '?' });
    // Left side (leg b)
    if (showB !== '') s += text(px - 18, (py + ry) / 2 + 4, '' + showB, { fill: showB === '?' ? C.accent : C.arc, size: 12, bold: showB === '?' });
    // Hypotenuse (c)
    if (showC !== '') s += text((qx + rx) / 2 + 14, (qy + ry) / 2, '' + showC, { fill: showC === '?' ? C.accent : C.arc, size: 12, bold: showC === '?' });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: isoscelesTriangle
  // params: { vertex: degrees, base: degrees, sides?: [equal, equal, base] }
  // ══════════════════════════════════════════
  function drawIsosceles(p) {
    var w = 200, h = 180;
    var vertex = p.vertex || 40;
    var baseAngle = p.base || ((180 - vertex) / 2);
    // Symmetric triangle: apex at top center
    var apexX = 100, apexY = 20;
    var halfBase = 70;
    var bx1 = apexX - halfBase, by1 = 155;
    var bx2 = apexX + halfBase, by2 = 155;

    var s = svgOpen(w, h);
    s += polygon([[apexX, apexY], [bx1, by1], [bx2, by2]]);
    // Tick marks on equal sides
    s += tickMark(apexX, apexY, bx1, by1, 1);
    s += tickMark(apexX, apexY, bx2, by2, 1);
    // Vertex angle label
    s += text(apexX, apexY + 30, vertex + '\u00B0', { fill: C.arc, size: 11, bold: true });
    // Base angle labels
    s += text(bx1 + 18, by1 - 14, baseAngle + '\u00B0', { fill: C.accent, size: 10 });
    s += text(bx2 - 18, by2 - 14, baseAngle + '\u00B0', { fill: C.accent, size: 10 });
    // Side labels
    if (p.sides) {
      s += text(apexX - halfBase / 2 - 14, (apexY + by1) / 2, '' + p.sides[0], { fill: C.dim, size: 10 });
      s += text(apexX + halfBase / 2 + 14, (apexY + by2) / 2, '' + p.sides[1], { fill: C.dim, size: 10 });
      s += text(apexX, by1 + 16, '' + p.sides[2], { fill: C.dim, size: 10 });
    }
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: polygon
  // Regular polygon with angle marked
  // params: { n: sides, angle?: interiorAngle, exteriorAngle?: deg }
  // ══════════════════════════════════════════
  function drawPolygon(p) {
    var n = p.n || 5;
    var w = 220, h = 190;
    var cx = 110, cy = 95;
    var r = 75;
    var pts = [];
    for (var i = 0; i < n; i++) {
      var a = (i * 360 / n - 90) * RAD;
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }

    var s = svgOpen(w, h);
    s += polygon(pts);
    // Mark one interior angle at vertex 0
    if (p.angle) {
      var v = pts[0];
      s += text(v[0], v[1] - 14, p.angle + '\u00B0', { fill: C.arc, size: 11, bold: true });
    }
    // Mark exterior angle
    if (p.exteriorAngle) {
      var v0 = pts[0], v1 = pts[1], vn = pts[n - 1];
      // Extend one side
      var dx = v0[0] - vn[0], dy = v0[1] - vn[1];
      var len = Math.sqrt(dx * dx + dy * dy);
      var ex = v0[0] + dx / len * 40, ey = v0[1] + dy / len * 40;
      s += line(v0[0], v0[1], ex, ey, { stroke: C.accent, dash: true });
      s += text(ex + 6, ey - 6, p.exteriorAngle + '\u00B0', { fill: C.accent, size: 11, bold: true });
    }
    // Label: "n sides"
    s += text(cx, h - 4, n + ' sides', { fill: C.dim, size: 11 });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: parallelLines
  // Two parallel lines cut by a transversal
  // params: { angle: degrees, highlight?: "alternate"|"corresponding"|"co-interior" }
  // ══════════════════════════════════════════
  function drawParallelLines(p) {
    var a = p.angle || 60;
    var w = 240, h = 170;

    var s = svgOpen(w, h);
    // Two horizontal parallel lines
    var y1 = 50, y2 = 120;
    s += line(20, y1, 220, y1);
    s += line(20, y2, 220, y2);
    // Arrows for parallel
    s += text(10, y1 + 4, '\u25B8', { fill: C.dim, size: 10 });
    s += text(10, y2 + 4, '\u25B8', { fill: C.dim, size: 10 });
    // Transversal
    var tx1 = 120 - 80 * Math.cos(a * RAD), ty1 = y1 - (y1 - 10);
    var tx2 = 120 + 80 * Math.cos(a * RAD), ty2 = y2 + (170 - y2 - 10);
    // Simple diagonal line through both
    var rise = y2 - y1;
    var run = rise / Math.tan(a * RAD);
    var intX1 = 120 - run / 2, intX2 = 120 + run / 2;
    s += line(intX1 - 30 * Math.cos(a * RAD), y1 - 30 * Math.sin(a * RAD),
      intX2 + 30 * Math.cos(a * RAD), y2 + 30 * Math.sin(a * RAD),
      { stroke: C.accent, sw: 2 });
    // Angle arc at top intersection
    s += arcPath(intX1, y1, 20, 0, a);
    s += text(intX1 + 30, y1 - 10, a + '\u00B0', { fill: C.arc, size: 11, bold: true });
    // Corresponding angle at bottom intersection
    if (p.highlight === 'corresponding' || p.highlight === 'alternate') {
      s += arcPath(intX2, y2, 20, 0, a);
      s += text(intX2 + 30, y2 - 10, a + '\u00B0', { fill: C.arc, size: 11, bold: true });
    }
    if (p.highlight === 'co-interior') {
      var co = 180 - a;
      s += arcPath(intX2, y2, 20, a, 180);
      s += text(intX2 - 30, y2 - 10, co + '\u00B0', { fill: C.accent, size: 11, bold: true });
    }
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: rectangle
  // params: { l: length, w: width }
  // ══════════════════════════════════════════
  function drawRectangle(p) {
    var l = p.l || 8, wd = p.w || 5;
    var svgW = 220, svgH = 160;
    var rx = 35, ry = 25, rw = 150, rh = 100;

    var s = svgOpen(svgW, svgH);
    s += '<rect x="' + rx + '" y="' + ry + '" width="' + rw + '" height="' + rh +
      '" fill="' + C.fill + '" stroke="' + C.line + '" stroke-width="2" rx="2"/>';
    // Right angle markers at corners
    s += rightAngleMark(rx, ry, 0, -90, 10);
    s += rightAngleMark(rx + rw, ry, 180, -90, 10);
    s += rightAngleMark(rx, ry + rh, 0, 90, 10);
    s += rightAngleMark(rx + rw, ry + rh, 180, 90, 10);
    // Dimension labels
    s += text(rx + rw / 2, ry + rh + 18, '' + l, { fill: C.arc, size: 13, bold: true });
    s += text(rx - 16, ry + rh / 2 + 4, '' + wd, { fill: C.arc, size: 13, bold: true });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: square
  // params: { s: side }
  // ══════════════════════════════════════════
  function drawSquare(p) {
    var side = p.s || 6;
    var svgW = 180, svgH = 180;
    var sz = 110;
    var rx = (svgW - sz) / 2, ry = 20;

    var s = svgOpen(svgW, svgH);
    s += '<rect x="' + rx + '" y="' + ry + '" width="' + sz + '" height="' + sz +
      '" fill="' + C.fill + '" stroke="' + C.line + '" stroke-width="2" rx="2"/>';
    // Tick marks on all sides
    s += tickMark(rx, ry, rx + sz, ry, 1);
    s += tickMark(rx + sz, ry, rx + sz, ry + sz, 1);
    s += tickMark(rx, ry + sz, rx + sz, ry + sz, 1);
    s += tickMark(rx, ry, rx, ry + sz, 1);
    s += text(rx + sz / 2, ry + sz + 20, '' + side, { fill: C.arc, size: 13, bold: true });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: triangleArea
  // Triangle with base and height labeled
  // params: { base: num, height: num }
  // ══════════════════════════════════════════
  function drawTriangleArea(p) {
    var base = p.base || 10, height = p.height || 6;
    var w = 220, h = 170;
    var bx1 = 30, by1 = 145, bx2 = 190, by2 = 145;
    var apex = 100, apexY = 30;

    var s = svgOpen(w, h);
    s += polygon([[apex, apexY], [bx1, by1], [bx2, by2]]);
    // Height dashed line
    s += line(apex, apexY, apex, by1, { stroke: C.dashed, dash: true });
    // Right angle at foot of height
    s += rightAngleMark(apex, by1, 0, 90, 10);
    // Labels
    s += text((bx1 + bx2) / 2, by1 + 18, 'b = ' + base, { fill: C.arc, size: 12, bold: true });
    s += text(apex + 18, (apexY + by1) / 2 + 4, 'h = ' + height, { fill: C.accent, size: 11, bold: true });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: circle
  // params: { r: radius, showDiameter?: bool, d?: diameter }
  // ══════════════════════════════════════════
  function drawCircle(p) {
    var r = p.r || 7;
    var w = 200, h = 200;
    var cx = 100, cy = 100;
    var cr = 70;

    var s = svgOpen(w, h);
    s += circle(cx, cy, cr, { fill: C.fill });
    // Center dot
    s += circle(cx, cy, 3, { fill: C.line, stroke: 'none' });
    // Radius line
    s += line(cx, cy, cx + cr, cy, { stroke: C.arc, sw: 2 });
    s += text(cx + cr / 2, cy - 8, 'r = ' + r, { fill: C.arc, size: 12, bold: true });
    if (p.showDiameter || p.d) {
      s += line(cx - cr, cy, cx + cr, cy, { stroke: C.accent, sw: 1.5, dash: true });
      var dVal = p.d || (r * 2);
      s += text(cx, cy + 16, 'd = ' + dVal, { fill: C.accent, size: 11 });
    }
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: parallelogram
  // params: { b: base, h: height, side?: slant }
  // ══════════════════════════════════════════
  function drawParallelogram(p) {
    var base = p.b || 12, height = p.h || 8;
    var w = 240, h = 170;
    var offset = 35; // slant offset
    var x1 = 30, y1 = 140, x2 = x1 + 160, y2 = 140;
    var x3 = x2 + offset, y3 = 40, x4 = x1 + offset, y4 = 40;

    var s = svgOpen(w, h);
    s += polygon([[x1, y1], [x2, y2], [x3, y3], [x4, y4]]);
    // Height dashed
    s += line(x4, y4, x4, y1, { stroke: C.dashed, dash: true, sw: 1.5 });
    s += rightAngleMark(x4, y1, 0, 90, 10);
    // Labels
    s += text((x1 + x2) / 2, y1 + 18, 'b = ' + base, { fill: C.arc, size: 12, bold: true });
    s += text(x4 - 16, (y4 + y1) / 2, 'h = ' + height, { fill: C.accent, size: 11, bold: true });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: trapezoid
  // params: { b1: top, b2: bottom, h: height }
  // ══════════════════════════════════════════
  function drawTrapezoid(p) {
    var b1 = p.b1 || 6, b2 = p.b2 || 12, height = p.h || 5;
    var w = 240, h = 170;
    var botX1 = 30, botX2 = 210, botY = 140;
    var topX1 = 70, topX2 = 170, topY = 40;

    var s = svgOpen(w, h);
    s += polygon([[topX1, topY], [topX2, topY], [botX2, botY], [botX1, botY]]);
    // Height dashed
    var hx = (topX1 + topX2) / 2;
    s += line(hx, topY, hx, botY, { stroke: C.dashed, dash: true, sw: 1.5 });
    s += rightAngleMark(hx, botY, 0, 90, 10);
    // Labels
    s += text((topX1 + topX2) / 2, topY - 10, 'b\u2081 = ' + b1, { fill: C.arc, size: 11, bold: true });
    s += text((botX1 + botX2) / 2, botY + 18, 'b\u2082 = ' + b2, { fill: C.accent, size: 11, bold: true });
    s += text(hx + 18, (topY + botY) / 2, 'h = ' + height, { fill: C.label, size: 11, bold: true });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: quadrilateral
  // Shows a labeled quadrilateral of a given type
  // params: { shape: "rectangle"|"rhombus"|"parallelogram"|"trapezoid"|"square",
  //           sides?: [a,b,c,d], angles?: [A,B,C,D], diagonals?: bool }
  // ══════════════════════════════════════════
  function drawQuadrilateral(p) {
    var shape = p.shape || 'rectangle';
    var w = 220, h = 180;
    var pts;
    switch (shape) {
      case 'square':
        pts = [[55, 25], [165, 25], [165, 135], [55, 135]]; break;
      case 'rectangle':
        pts = [[35, 35], [185, 35], [185, 135], [35, 135]]; break;
      case 'rhombus':
        pts = [[110, 15], [190, 85], [110, 155], [30, 85]]; break;
      case 'parallelogram':
        pts = [[50, 140], [190, 140], [170, 40], [30, 40]]; break;
      case 'trapezoid':
        pts = [[70, 40], [150, 40], [190, 140], [30, 140]]; break;
      default:
        pts = [[60, 30], [170, 50], [180, 140], [40, 130]]; break;
    }

    var s = svgOpen(w, h);
    s += polygon(pts);
    // Diagonals
    if (p.diagonals) {
      s += line(pts[0][0], pts[0][1], pts[2][0], pts[2][1], { stroke: C.accent, dash: true, sw: 1.5 });
      s += line(pts[1][0], pts[1][1], pts[3][0], pts[3][1], { stroke: C.accent, dash: true, sw: 1.5 });
    }
    // Tick marks for equal sides
    if (shape === 'rhombus' || shape === 'square') {
      for (var i = 0; i < 4; i++) {
        var ni = (i + 1) % 4;
        s += tickMark(pts[i][0], pts[i][1], pts[ni][0], pts[ni][1], 1);
      }
    }
    if (shape === 'parallelogram') {
      s += tickMark(pts[0][0], pts[0][1], pts[1][0], pts[1][1], 1);
      s += tickMark(pts[2][0], pts[2][1], pts[3][0], pts[3][1], 1);
      s += tickMark(pts[1][0], pts[1][1], pts[2][0], pts[2][1], 2);
      s += tickMark(pts[3][0], pts[3][1], pts[0][0], pts[0][1], 2);
    }
    // Side labels
    if (p.sides) {
      for (var j = 0; j < 4; j++) {
        var nj = (j + 1) % 4;
        var mx = (pts[j][0] + pts[nj][0]) / 2;
        var my = (pts[j][1] + pts[nj][1]) / 2;
        var dx = pts[nj][1] - pts[j][1], dy = -(pts[nj][0] - pts[j][0]);
        var dl = Math.sqrt(dx * dx + dy * dy);
        if (p.sides[j]) s += text(mx + dx / dl * 14, my + dy / dl * 14, '' + p.sides[j], { fill: C.arc, size: 11 });
      }
    }
    // Angle labels
    if (p.angles) {
      for (var k = 0; k < 4; k++) {
        if (p.angles[k]) s += text(pts[k][0], pts[k][1] + (pts[k][1] < 90 ? 18 : -10),
          p.angles[k] + '\u00B0', { fill: C.arc, size: 10 });
      }
    }
    // Shape name
    s += text(w / 2, h - 4, shape.charAt(0).toUpperCase() + shape.slice(1), { fill: C.dim, size: 10 });
    s += svgClose();
    return s;
  }

  // ══════════════════════════════════════════
  // DIAGRAM TYPE: compositeShape
  // Two overlapping shapes (rect + triangle, rect + semicircle, etc.)
  // params: { shapes: [{type, ...params}] }  — simplified to common combos
  // params: { l: length, w: width, extra: "triangle"|"semicircle" }
  // ══════════════════════════════════════════
  function drawCompositeShape(p) {
    var l = p.l || 10, wd = p.w || 6;
    var extra = p.extra || 'semicircle';
    var svgW = 250, svgH = 180;
    var rx = 30, ry = 40, rw = 130, rh = 100;

    var s = svgOpen(svgW, svgH);
    // Base rectangle
    s += '<rect x="' + rx + '" y="' + ry + '" width="' + rw + '" height="' + rh +
      '" fill="' + C.fill + '" stroke="' + C.line + '" stroke-width="2"/>';
    if (extra === 'semicircle') {
      var scy = ry + rh / 2;
      var scr = rh / 2;
      s += '<path d="M' + (rx + rw) + ',' + ry + ' A' + scr + ',' + scr + ' 0 0 1 ' +
        (rx + rw) + ',' + (ry + rh) + '" fill="' + C.fill + '" stroke="' + C.line + '" stroke-width="2"/>';
    } else if (extra === 'triangle') {
      var tx = rx + rw, tApex = tx + 50;
      s += polygon([[tx, ry], [tApex, ry + rh / 2], [tx, ry + rh]], { fill: C.fill });
    }
    // Dimension labels
    s += text(rx + rw / 2, ry + rh + 18, '' + l, { fill: C.arc, size: 12, bold: true });
    s += text(rx - 14, ry + rh / 2 + 4, '' + wd, { fill: C.arc, size: 12, bold: true });
    s += svgClose();
    return s;
  }

  // ═══════════════════════════════════════════
  // DIAGRAM TYPE: exteriorAngle
  // Triangle with one exterior angle shown
  // params: { interior: [A, B, C], exterior: degrees, vertex?: 0|1|2 }
  // ═══════════════════════════════════════════
  function drawExteriorAngle(p) {
    var w = 240, h = 180;
    var interior = p.interior || [60, 70, 50];
    var ext = p.exterior || (180 - interior[2]);
    var bx1 = 30, by = 150, bx2 = 160, apexX = 90, apexY = 30;

    var s = svgOpen(w, h);
    s += polygon([[apexX, apexY], [bx1, by], [bx2, by]]);
    // Extend base beyond vertex C (bx2, by)
    s += line(bx2, by, bx2 + 60, by, { stroke: C.accent, dash: true, sw: 2 });
    // Exterior angle arc
    var intAngle = interior[2] || 50;
    var extAngle = 180 - intAngle;
    // Angle between extended base (0°) and hypotenuse going up
    var dx = apexX - bx2, dy = apexY - by;
    var armAngle = Math.atan2(-dy, dx) / RAD;
    if (armAngle < 0) armAngle += 360;
    s += arcSector(bx2, by, 25, 0, armAngle, 'rgba(240,100,100,0.2)');
    s += arcPath(bx2, by, 25, 0, armAngle);
    s += text(bx2 + 38, by - 18, ext + '\u00B0', { fill: C.accent, size: 12, bold: true });
    // Interior angle labels
    if (interior[1]) s += text(bx1 + 22, by - 14, interior[1] + '\u00B0', { fill: C.arc, size: 10 });
    if (interior[0]) s += text(apexX + 6, apexY + 26, interior[0] + '\u00B0', { fill: C.arc, size: 10 });
    s += svgClose();
    return s;
  }

  // ═══════════════════════════════════════════
  // Public API: renderDiagram(descriptor) → HTML string
  // ═══════════════════════════════════════════
  var TYPES = {
    angle: drawAngle,
    complementary: drawComplementary,
    supplementary: drawSupplementary,
    verticalAngles: drawVerticalAngles,
    triangle: drawTriangle,
    rightTriangle: drawRightTriangle,
    isosceles: drawIsosceles,
    polygon: drawPolygon,
    parallelLines: drawParallelLines,
    rectangle: drawRectangle,
    square: drawSquare,
    triangleArea: drawTriangleArea,
    circle: drawCircle,
    parallelogram: drawParallelogram,
    trapezoid: drawTrapezoid,
    quadrilateral: drawQuadrilateral,
    compositeShape: drawCompositeShape,
    exteriorAngle: drawExteriorAngle,
  };

  function renderDiagram(desc) {
    if (!desc || !desc.type) return '';
    var fn = TYPES[desc.type];
    if (!fn) { console.warn('Unknown diagram type: ' + desc.type); return ''; }
    return '<div class="geo-diagram">' + fn(desc) + '</div>';
  }

  // Expose globally
  window.renderDiagram = renderDiagram;
  window.GeoDiagram = { render: renderDiagram, types: TYPES };

  return { render: renderDiagram, types: TYPES };
})();
