(function() {var implementors = {
"erased_serde":[["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut (dyn <a class=\"trait\" href=\"erased_serde/trait.Serializer.html\" title=\"trait erased_serde::Serializer\">Serializer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + '_)"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut (dyn <a class=\"trait\" href=\"erased_serde/trait.Serializer.html\" title=\"trait erased_serde::Serializer\">Serializer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + '_)"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut (dyn <a class=\"trait\" href=\"erased_serde/trait.Serializer.html\" title=\"trait erased_serde::Serializer\">Serializer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + '_)"],["impl&lt;'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut (dyn <a class=\"trait\" href=\"erased_serde/trait.Serializer.html\" title=\"trait erased_serde::Serializer\">Serializer</a> + '_)"]],
"ron":[["impl&lt;'a, W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut <a class=\"struct\" href=\"ron/ser/struct.Serializer.html\" title=\"struct ron::ser::Serializer\">Serializer</a>&lt;W&gt;"]],
"serde":[],
"serde_json":[["impl <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for <a class=\"struct\" href=\"serde_json/value/struct.Serializer.html\" title=\"struct serde_json::value::Serializer\">Serializer</a>"],["impl&lt;'a, W, F&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut <a class=\"struct\" href=\"serde_json/struct.Serializer.html\" title=\"struct serde_json::Serializer\">Serializer</a>&lt;W, F&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    F: <a class=\"trait\" href=\"serde_json/ser/trait.Formatter.html\" title=\"trait serde_json::ser::Formatter\">Formatter</a>,</span>"]],
"serde_yaml":[["impl <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for <a class=\"struct\" href=\"serde_yaml/value/struct.Serializer.html\" title=\"struct serde_yaml::value::Serializer\">Serializer</a>"],["impl&lt;'a, W&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut <a class=\"struct\" href=\"serde_yaml/struct.Serializer.html\" title=\"struct serde_yaml::Serializer\">Serializer</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"]],
"toml":[["impl&lt;'d&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for <a class=\"struct\" href=\"toml/struct.Serializer.html\" title=\"struct toml::Serializer\">Serializer</a>&lt;'d&gt;"],["impl&lt;'d&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for <a class=\"struct\" href=\"toml/ser/struct.ValueSerializer.html\" title=\"struct toml::ser::ValueSerializer\">ValueSerializer</a>&lt;'d&gt;"]],
"toml_edit":[["impl <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for <a class=\"struct\" href=\"toml_edit/ser/struct.ValueSerializer.html\" title=\"struct toml_edit::ser::ValueSerializer\">ValueSerializer</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()