(function() {var implementors = {
"async_channel":[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"async_channel/struct.Receiver.html\" title=\"struct async_channel::Receiver\">Receiver</a>&lt;T&gt;"]],
"futures_core":[],
"futures_lite":[["impl&lt;S, U, F&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.FlatMap.html\" title=\"struct futures_lite::stream::FlatMap\">FlatMap</a>&lt;S, U, F&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    U: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; U,</span>"],["impl&lt;S&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Enumerate.html\" title=\"struct futures_lite::stream::Enumerate\">Enumerate</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,</span>"],["impl&lt;T, E, F, Fut, Item&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.TryUnfold.html\" title=\"struct futures_lite::stream::TryUnfold\">TryUnfold</a>&lt;T, F, Fut&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(T) -&gt; Fut,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.73.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.73.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.tuple.html\">(Item, T)</a>&gt;, E&gt;&gt;,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Once.html\" title=\"struct futures_lite::stream::Once\">Once</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Repeat.html\" title=\"struct futures_lite::stream::Repeat\">Repeat</a>&lt;T&gt;"],["impl&lt;S, U&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Flatten.html\" title=\"struct futures_lite::stream::Flatten\">Flatten</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = U&gt;,\n    U: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,</span>"],["impl&lt;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Skip.html\" title=\"struct futures_lite::stream::Skip\">Skip</a>&lt;S&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Split.html\" title=\"struct futures_lite::io::Split\">Split</a>&lt;R&gt;"],["impl&lt;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Take.html\" title=\"struct futures_lite::stream::Take\">Take</a>&lt;S&gt;"],["impl&lt;S, F, T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Map.html\" title=\"struct futures_lite::stream::Map\">Map</a>&lt;S, F&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; T,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Empty.html\" title=\"struct futures_lite::stream::Empty\">Empty</a>&lt;T&gt;"],["impl&lt;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Fuse.html\" title=\"struct futures_lite::stream::Fuse\">Fuse</a>&lt;S&gt;"],["impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Copied.html\" title=\"struct futures_lite::stream::Copied\">Copied</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.reference.html\">&amp;'a T</a>&gt;,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + 'a,</span>"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Lines.html\" title=\"struct futures_lite::io::Lines\">Lines</a>&lt;R&gt;"],["impl&lt;S&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Cycle.html\" title=\"struct futures_lite::stream::Cycle\">Cycle</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Pending.html\" title=\"struct futures_lite::stream::Pending\">Pending</a>&lt;T&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.OnceFuture.html\" title=\"struct futures_lite::stream::OnceFuture\">OnceFuture</a>&lt;F&gt;"],["impl&lt;A: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>, B: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Zip.html\" title=\"struct futures_lite::stream::Zip\">Zip</a>&lt;A, B&gt;"],["impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Race.html\" title=\"struct futures_lite::stream::Race\">Race</a>&lt;S1, S2&gt;<span class=\"where fmt-newline\">where\n    S1: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = T&gt;,\n    S2: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = T&gt;,</span>"],["impl&lt;S, St, F, B&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Scan.html\" title=\"struct futures_lite::stream::Scan\">Scan</a>&lt;S, St, F&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.reference.html\">&amp;mut St</a>, S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.73.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;B&gt;,</span>"],["impl&lt;S, P&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.SkipWhile.html\" title=\"struct futures_lite::stream::SkipWhile\">SkipWhile</a>&lt;S, P&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;S, F&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Inspect.html\" title=\"struct futures_lite::stream::Inspect\">Inspect</a>&lt;S, F&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>),</span>"],["impl&lt;S, P&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.TakeWhile.html\" title=\"struct futures_lite::stream::TakeWhile\">TakeWhile</a>&lt;S, P&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Or.html\" title=\"struct futures_lite::stream::Or\">Or</a>&lt;S1, S2&gt;<span class=\"where fmt-newline\">where\n    S1: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = T&gt;,\n    S2: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = T&gt;,</span>"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Iter.html\" title=\"struct futures_lite::stream::Iter\">Iter</a>&lt;I&gt;"],["impl&lt;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.StepBy.html\" title=\"struct futures_lite::stream::StepBy\">StepBy</a>&lt;S&gt;"],["impl&lt;T, F, Fut, Item&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Unfold.html\" title=\"struct futures_lite::stream::Unfold\">Unfold</a>&lt;T, F, Fut&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(T) -&gt; Fut,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.73.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.tuple.html\">(Item, T)</a>&gt;&gt;,</span>"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Bytes.html\" title=\"struct futures_lite::io::Bytes\">Bytes</a>&lt;R&gt;"],["impl&lt;T, F&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.RepeatWith.html\" title=\"struct futures_lite::stream::RepeatWith\">RepeatWith</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>() -&gt; T,</span>"],["impl&lt;S, F, Fut&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Then.html\" title=\"struct futures_lite::stream::Then\">Then</a>&lt;S, F, Fut&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; Fut,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,</span>"],["impl&lt;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>, U: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>&gt;&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Chain.html\" title=\"struct futures_lite::stream::Chain\">Chain</a>&lt;S, U&gt;"],["impl&lt;T, F&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.PollFn.html\" title=\"struct futures_lite::stream::PollFn\">PollFn</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.73.0/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.73.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt;,</span>"],["impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Cloned.html\" title=\"struct futures_lite::stream::Cloned\">Cloned</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.reference.html\">&amp;'a T</a>&gt;,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'a,</span>"],["impl&lt;S, P&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.Filter.html\" title=\"struct futures_lite::stream::Filter\">Filter</a>&lt;S, P&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;S, F, T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.FilterMap.html\" title=\"struct futures_lite::stream::FilterMap\">FilterMap</a>&lt;S, F&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.73.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()