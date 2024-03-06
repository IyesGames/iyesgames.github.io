(function() {var type_impls = {
"euclid":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#112-124\">source</a><a href=\"#impl-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#115-123\">source</a><h4 class=\"code-header\">pub const fn <a href=\"euclid/struct.HomogeneousVector.html#tymethod.new\" class=\"fn\">new</a>(x: T, y: T, z: T, w: T) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Constructor taking scalar values directly.</p>\n</div></details></div></details>",0,"euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#126-154\">source</a><a href=\"#impl-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"euclid/num/trait.Zero.html\" title=\"trait euclid::num::Zero\">Zero</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>, U&gt; <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_point2d\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#131-137\">source</a><h4 class=\"code-header\">pub fn <a href=\"euclid/struct.HomogeneousVector.html#tymethod.to_point2d\" class=\"fn\">to_point2d</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"euclid/struct.Point2D.html\" title=\"struct euclid::Point2D\">Point2D</a>&lt;T, U&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Convert into Cartesian 2D point.</p>\n<p>Returns None if the point is on or behind the W=0 hemisphere.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_point3d\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#143-153\">source</a><h4 class=\"code-header\">pub fn <a href=\"euclid/struct.HomogeneousVector.html#tymethod.to_point3d\" class=\"fn\">to_point3d</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"euclid/struct.Point3D.html\" title=\"struct euclid::Point3D\">Point3D</a>&lt;T, U&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Convert into Cartesian 3D point.</p>\n<p>Returns None if the point is on or behind the W=0 hemisphere.</p>\n</div></details></div></details>",0,"euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CPoint2D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#170-175\">source</a><a href=\"#impl-From%3CPoint2D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"euclid/num/trait.Zero.html\" title=\"trait euclid::num::Zero\">Zero</a> + <a class=\"trait\" href=\"euclid/num/trait.One.html\" title=\"trait euclid::num::One\">One</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"euclid/struct.Point2D.html\" title=\"struct euclid::Point2D\">Point2D</a>&lt;T, U&gt;&gt; for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#172-174\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(p: <a class=\"struct\" href=\"euclid/struct.Point2D.html\" title=\"struct euclid::Point2D\">Point2D</a>&lt;T, U&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Point2D<T, U>>","euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#38-48\">source</a><a href=\"#impl-Clone-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#39-47\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CPoint3D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#177-182\">source</a><a href=\"#impl-From%3CPoint3D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"euclid/num/trait.One.html\" title=\"trait euclid::num::One\">One</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"euclid/struct.Point3D.html\" title=\"struct euclid::Point3D\">Point3D</a>&lt;T, U&gt;&gt; for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#179-181\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(p: <a class=\"struct\" href=\"euclid/struct.Point3D.html\" title=\"struct euclid::Point3D\">Point3D</a>&lt;T, U&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Point3D<T, U>>","euclid::default::HomogeneousVector"],["<section id=\"impl-Copy-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#36\">source</a><a href=\"#impl-Copy-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section>","Copy","euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#184-193\">source</a><a href=\"#impl-Debug-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#185-192\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVector2D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#156-161\">source</a><a href=\"#impl-From%3CVector2D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"euclid/num/trait.Zero.html\" title=\"trait euclid::num::Zero\">Zero</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"euclid/struct.Vector2D.html\" title=\"struct euclid::Vector2D\">Vector2D</a>&lt;T, U&gt;&gt; for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#158-160\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"euclid/struct.Vector2D.html\" title=\"struct euclid::Vector2D\">Vector2D</a>&lt;T, U&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vector2D<T, U>>","euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#91-98\">source</a><a href=\"#impl-PartialEq-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#95-97\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","euclid::default::HomogeneousVector"],["<section id=\"impl-Eq-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#89\">source</a><a href=\"#impl-Eq-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span></h3></section>","Eq","euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#100-110\">source</a><a href=\"#impl-Hash-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#104-109\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, h: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVector3D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#163-168\">source</a><a href=\"#impl-From%3CVector3D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"euclid/num/trait.Zero.html\" title=\"trait euclid::num::Zero\">Zero</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"euclid/struct.Vector3D.html\" title=\"struct euclid::Vector3D\">Vector3D</a>&lt;T, U&gt;&gt; for <a class=\"struct\" href=\"euclid/struct.HomogeneousVector.html\" title=\"struct euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/homogen.rs.html#165-167\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"euclid/struct.Vector3D.html\" title=\"struct euclid::Vector3D\">Vector3D</a>&lt;T, U&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vector3D<T, U>>","euclid::default::HomogeneousVector"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()