(function() {var type_impls = {
"rustls":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SessionID\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#153-174\">source</a><a href=\"#impl-SessionID\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"rustls/internal/msgs/handshake/struct.SessionID.html\" title=\"struct rustls::internal::msgs::handshake::SessionID\">SessionID</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.random\" class=\"method\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#154-158\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustls/internal/msgs/handshake/struct.SessionID.html#tymethod.random\" class=\"fn\">random</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, GetRandomFailed&gt;</h4></section><section id=\"method.empty\" class=\"method\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#160-165\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustls/internal/msgs/handshake/struct.SessionID.html#tymethod.empty\" class=\"fn\">empty</a>() -&gt; Self</h4></section><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#167-169\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustls/internal/msgs/handshake/struct.SessionID.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.is_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#171-173\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustls/internal/msgs/handshake/struct.SessionID.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></div></details>",0,"rustls::msgs::persist::ServerSessionKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SessionID\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#105\">source</a><a href=\"#impl-Clone-for-SessionID\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustls/internal/msgs/handshake/struct.SessionID.html\" title=\"struct rustls::internal::msgs::handshake::SessionID\">SessionID</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#105\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustls/internal/msgs/handshake/struct.SessionID.html\" title=\"struct rustls::internal::msgs::handshake::SessionID\">SessionID</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustls::msgs::persist::ServerSessionKey"],["<section id=\"impl-Copy-for-SessionID\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#105\">source</a><a href=\"#impl-Copy-for-SessionID\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rustls/internal/msgs/handshake/struct.SessionID.html\" title=\"struct rustls::internal::msgs::handshake::SessionID\">SessionID</a></h3></section>","Copy","rustls::msgs::persist::ServerSessionKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SessionID\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#111-115\">source</a><a href=\"#impl-Debug-for-SessionID\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustls/internal/msgs/handshake/struct.SessionID.html\" title=\"struct rustls::internal::msgs::handshake::SessionID\">SessionID</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#112-114\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustls::msgs::persist::ServerSessionKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SessionID\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#117-130\">source</a><a href=\"#impl-PartialEq-for-SessionID\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"rustls/internal/msgs/handshake/struct.SessionID.html\" title=\"struct rustls::internal::msgs::handshake::SessionID\">SessionID</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#118-129\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustls::msgs::persist::ServerSessionKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Codec-for-SessionID\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#132-151\">source</a><a href=\"#impl-Codec-for-SessionID\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustls/internal/msgs/codec/trait.Codec.html\" title=\"trait rustls::internal::msgs::codec::Codec\">Codec</a> for <a class=\"struct\" href=\"rustls/internal/msgs/handshake/struct.SessionID.html\" title=\"struct rustls::internal::msgs::handshake::SessionID\">SessionID</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#133-137\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustls/internal/msgs/codec/trait.Codec.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Function for encoding itself by appending itself to\nthe provided vec of bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/handshake.rs.html#139-150\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustls/internal/msgs/codec/trait.Codec.html#tymethod.read\" class=\"fn\">read</a>(r: &amp;mut <a class=\"struct\" href=\"rustls/internal/msgs/codec/struct.Reader.html\" title=\"struct rustls::internal::msgs::codec::Reader\">Reader</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Function for decoding itself from the provided reader\nwill return Some if the decoding was successful or\nNone if it was not.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_encoding\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/codec.rs.html#90-94\">source</a><a href=\"#method.get_encoding\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustls/internal/msgs/codec/trait.Codec.html#method.get_encoding\" class=\"fn\">get_encoding</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convenience function for encoding the implementation\ninto a vec and returning it</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustls/msgs/codec.rs.html#98-101\">source</a><a href=\"#method.read_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustls/internal/msgs/codec/trait.Codec.html#method.read_bytes\" class=\"fn\">read_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Function for wrapping a call to the read function in\na Reader for the slice of bytes provided</div></details></div></details>","Codec","rustls::msgs::persist::ServerSessionKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()