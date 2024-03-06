(function() {var type_impls = {
"hexasphere":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Subdivided%3CT,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1026-1030\">source</a><a href=\"#impl-Subdivided%3CT,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, S: <a class=\"trait\" href=\"hexasphere/trait.BaseShape.html\" title=\"trait hexasphere::BaseShape\">BaseShape</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"struct\" href=\"hexasphere/struct.Subdivided.html\" title=\"struct hexasphere::Subdivided\">Subdivided</a>&lt;T, S&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1027-1029\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.new\" class=\"fn\">new</a>(subdivisions: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, generator: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"struct\" href=\"glam/f32/sse2/vec3a/struct.Vec3A.html\" title=\"struct glam::f32::sse2::vec3a::Vec3A\">Vec3A</a>) -&gt; T) -&gt; Self</h4></section></div></details>",0,"hexasphere::shapes::IcoSphere","hexasphere::shapes::NormIcoSphere","hexasphere::shapes::TetraSphere","hexasphere::shapes::TrianglePlane","hexasphere::shapes::SquarePlane","hexasphere::shapes::CubeSphere"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Subdivided%3CT,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1032-1302\">source</a><a href=\"#impl-Subdivided%3CT,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, S: <a class=\"trait\" href=\"hexasphere/trait.BaseShape.html\" title=\"trait hexasphere::BaseShape\">BaseShape</a>&gt; <a class=\"struct\" href=\"hexasphere/struct.Subdivided.html\" title=\"struct hexasphere::Subdivided\">Subdivided</a>&lt;T, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_custom_shape\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1043-1085\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.new_custom_shape\" class=\"fn\">new_custom_shape</a>(\n    subdivisions: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    generator: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"struct\" href=\"glam/f32/sse2/vec3a/struct.Vec3A.html\" title=\"struct glam::f32::sse2::vec3a::Vec3A\">Vec3A</a>) -&gt; T,\n    shape: S\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates the base shape from <code>S</code> and subdivides it.</p>\n<ul>\n<li>\n<p><code>subdivisions</code> specifies the number of times a subdivision\nwill be created. In other terms, this is the number of auxiliary\npoints between the vertices on the original shape.</p>\n</li>\n<li>\n<p><code>generator</code> is a function run once all the subdivisions are\napplied and its values are stored in an internal <code>Vec</code>.</p>\n</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.subdivide\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1092-1117\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.subdivide\" class=\"fn\">subdivide</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Subdivides all triangles. <code>calculate</code> signals whether or not\nto recalculate vertices (To not calculate vertices between many\nsubdivisions).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw_points\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1122-1124\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.raw_points\" class=\"fn\">raw_points</a>(&amp;self) -&gt; &amp;[<a class=\"struct\" href=\"glam/f32/sse2/vec3a/struct.Vec3A.html\" title=\"struct glam::f32::sse2::vec3a::Vec3A\">Vec3A</a>]</h4></section></summary><div class=\"docblock\"><p>The raw points created by the subdivision process.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_indices\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1138-1140\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.get_indices\" class=\"fn\">get_indices</a>(&amp;self, triangle: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, buffer: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Appends the indices for the triangle into <code>buffer</code>.</p>\n<p>The specified triangle is a main triangle on the base\nshape. The range of this should be limited to the number\nof triangles in the base shape.</p>\n<p>Alternatively, use <a href=\"#method.get_all_indices\"><code>get_all_indices</code></a> to get all the\nindices.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_all_indices\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1145-1153\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.get_all_indices\" class=\"fn\">get_all_indices</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Gets the indices for all main triangles in the shape.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_line_indices\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1166-1174\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.get_line_indices\" class=\"fn\">get_line_indices</a>(\n    &amp;self,\n    buffer: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;,\n    triangle: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    delta: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    breaks: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;)\n)</h4></section></summary><div class=\"docblock\"><p>Gets the wireframe indices for the contents of a specified triangle.</p>\n<p><code>delta</code> is added to all of the indices pushed into the buffer, and\nis generally intended to be used to have a NaN vertex at zero. Set\nto zero to produce the indices as if there was no NaN vertex.</p>\n<p><code>breaks</code> is run every time there is a necessary break in the line\nstrip. Use this to, for example, swap out the buffer using\n<a href=\"https://doc.rust-lang.org/1.75.0/core/mem/fn.swap.html\" title=\"fn core::mem::swap\"><code>std::mem::swap</code></a>, or push a NaN index into the buffer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_major_edge_line_indices\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1181-1188\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.get_major_edge_line_indices\" class=\"fn\">get_major_edge_line_indices</a>(\n    &amp;self,\n    edge: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    buffer: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;,\n    delta: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>\n)</h4></section></summary><div class=\"docblock\"><p>Gets the wireframe indices for the specified edge of the base shape.</p>\n<p>See <a href=\"hexasphere/struct.Subdivided.html#method.get_line_indices\" title=\"method hexasphere::Subdivided::get_line_indices\"><code>Self::get_line_indices</code></a> for more on <code>delta</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_all_line_indices\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1196-1213\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.get_all_line_indices\" class=\"fn\">get_all_line_indices</a>(\n    &amp;self,\n    delta: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    breaks: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;)\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Gets the wireframe indices for all main triangles in the shape,\nas well as all edges.</p>\n<p>See <a href=\"hexasphere/struct.Subdivided.html#method.get_line_indices\" title=\"method hexasphere::Subdivided::get_line_indices\"><code>Self::get_line_indices</code></a> for more on <code>delta</code>, and <code>breaks</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.subdivisions\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1219-1221\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.subdivisions\" class=\"fn\">subdivisions</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of subdivisions applied when this shape\nwas created.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw_data\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1226-1228\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.raw_data\" class=\"fn\">raw_data</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[T]</a></h4></section></summary><div class=\"docblock\"><p>Returns the custom data created by the generator function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.indices_per_main_triangle\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1240-1242\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.indices_per_main_triangle\" class=\"fn\">indices_per_main_triangle</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Calculate the number of indices which each main\ntriangle will add to the vertex buffer.</p>\n<h5 id=\"equation\"><a href=\"#equation\">Equation</a></h5><div class=\"example-wrap\"><pre class=\"language-text\"><code>(subdivisions + 1)²\n</code></pre></div></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.vertices_per_main_triangle_shared\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1255-1257\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.vertices_per_main_triangle_shared\" class=\"fn\">vertices_per_main_triangle_shared</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Calculate the number of vertices contained within\neach main triangle including the vertices which are\nshared with another main triangle.</p>\n<h5 id=\"equation-1\"><a href=\"#equation-1\">Equation</a></h5><div class=\"example-wrap\"><pre class=\"language-text\"><code>(subdivisions + 1) * (subdivisions + 2) / 2\n</code></pre></div></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.vertices_per_main_triangle_unique\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1274-1279\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.vertices_per_main_triangle_unique\" class=\"fn\">vertices_per_main_triangle_unique</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Calculate the number of vertices contained within each\nmain triangle excluding the ones that are shared with\nother main triangles.</p>\n<h5 id=\"equation-2\"><a href=\"#equation-2\">Equation</a></h5><div class=\"example-wrap\"><pre class=\"language-text\"><code>{\n{ subdivisions &lt; 2  : 0\n{\n{ subdivisions &gt;= 2 : (subdivisions - 1) * subdivisions / 2\n{\n</code></pre></div></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shared_vertices\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1292-1294\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.shared_vertices\" class=\"fn\">shared_vertices</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Calculate the number of vertices along the edges\nof the main triangles and the vertices of the main\ntriangles.</p>\n<h5 id=\"equation-3\"><a href=\"#equation-3\">Equation</a></h5><div class=\"example-wrap\"><pre class=\"language-text\"><code>subdivisions * EDGES + INITIAL_POINTS\n</code></pre></div></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.linear_distance\" class=\"method\"><a class=\"src rightside\" href=\"src/hexasphere/lib.rs.html#1299-1301\">source</a><h4 class=\"code-header\">pub fn <a href=\"hexasphere/struct.Subdivided.html#tymethod.linear_distance\" class=\"fn\">linear_distance</a>(&amp;self, p1: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, p2: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, radius: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a></h4></section></summary><div class=\"docblock\"><p>Linear distance between two points on this shape.</p>\n</div></details></div></details>",0,"hexasphere::shapes::IcoSphere","hexasphere::shapes::NormIcoSphere","hexasphere::shapes::TetraSphere","hexasphere::shapes::TrianglePlane","hexasphere::shapes::SquarePlane","hexasphere::shapes::CubeSphere"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()