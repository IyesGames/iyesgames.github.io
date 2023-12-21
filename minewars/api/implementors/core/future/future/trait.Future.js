(function() {var implementors = {
"allocator_api2":[["impl&lt;F: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"allocator_api2/boxed/struct.Box.html\" title=\"struct allocator_api2::boxed::Box\">Box</a>&lt;F, A&gt;<span class=\"where fmt-newline\">where\n    A: 'static + <a class=\"trait\" href=\"allocator_api2/alloc/trait.Allocator.html\" title=\"trait allocator_api2::alloc::Allocator\">Allocator</a>,</span>"]],
"async_channel":[["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_channel/struct.Recv.html\" title=\"struct async_channel::Recv\">Recv</a>&lt;'a, T&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_channel/struct.Send.html\" title=\"struct async_channel::Send\">Send</a>&lt;'a, T&gt;"]],
"async_lock":[["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.Read.html\" title=\"struct async_lock::futures::Read\">Read</a>&lt;'a, T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.AcquireArc.html\" title=\"struct async_lock::futures::AcquireArc\">AcquireArc</a>"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.UpgradeArc.html\" title=\"struct async_lock::futures::UpgradeArc\">UpgradeArc</a>&lt;T&gt;"],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.Upgrade.html\" title=\"struct async_lock::futures::Upgrade\">Upgrade</a>&lt;'a, T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.Acquire.html\" title=\"struct async_lock::futures::Acquire\">Acquire</a>&lt;'a&gt;"],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.UpgradableRead.html\" title=\"struct async_lock::futures::UpgradableRead\">UpgradableRead</a>&lt;'a, T&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.ReadArc.html\" title=\"struct async_lock::futures::ReadArc\">ReadArc</a>&lt;'a, T&gt;"],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.Lock.html\" title=\"struct async_lock::futures::Lock\">Lock</a>&lt;'a, T&gt;"],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.WriteArc.html\" title=\"struct async_lock::futures::WriteArc\">WriteArc</a>&lt;'a, T&gt;"],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.UpgradableReadArc.html\" title=\"struct async_lock::futures::UpgradableReadArc\">UpgradableReadArc</a>&lt;'a, T&gt;"],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.Write.html\" title=\"struct async_lock::futures::Write\">Write</a>&lt;'a, T&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.LockArc.html\" title=\"struct async_lock::futures::LockArc\">LockArc</a>&lt;T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_lock/futures/struct.BarrierWait.html\" title=\"struct async_lock::futures::BarrierWait\">BarrierWait</a>&lt;'a&gt;"]],
"async_task":[["impl&lt;T, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_task/struct.FallibleTask.html\" title=\"struct async_task::FallibleTask\">FallibleTask</a>&lt;T, M&gt;"],["impl&lt;T, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"async_task/struct.Task.html\" title=\"struct async_task::Task\">Task</a>&lt;T, M&gt;"]],
"bevy_tasks":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"bevy_tasks/struct.Task.html\" title=\"struct bevy_tasks::Task\">Task</a>&lt;T&gt;"]],
"calloop":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"calloop/timer/struct.TimeoutFuture.html\" title=\"struct calloop::timer::TimeoutFuture\">TimeoutFuture</a>"],["impl&lt;'s, 'l, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"calloop/io/struct.Writable.html\" title=\"struct calloop::io::Writable\">Writable</a>&lt;'s, 'l, F&gt;"],["impl&lt;'s, 'l, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"calloop/io/struct.Readable.html\" title=\"struct calloop::io::Readable\">Readable</a>&lt;'s, 'l, F&gt;"]],
"event_listener":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"event_listener/struct.EventListener.html\" title=\"struct event_listener::EventListener\">EventListener</a>&lt;T&gt;"]],
"event_listener_strategy":[["impl&lt;F: <a class=\"trait\" href=\"event_listener_strategy/trait.EventListenerFuture.html\" title=\"trait event_listener_strategy::EventListenerFuture\">EventListenerFuture</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"event_listener_strategy/struct.FutureWrapper.html\" title=\"struct event_listener_strategy::FutureWrapper\">FutureWrapper</a>&lt;F&gt;"]],
"futures_lite":[["impl&lt;S, A, B, FromA, FromB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.UnzipFuture.html\" title=\"struct futures_lite::stream::UnzipFuture\">UnzipFuture</a>&lt;S, FromA, FromB&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.1/std/primitive.tuple.html\">(A, B)</a>&gt;,\n    FromA: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt;,\n    FromB: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;B&gt;,</span>"],["impl&lt;'a, S, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.FindFuture.html\" title=\"struct futures_lite::stream::FindFuture\">FindFuture</a>&lt;'a, S, P&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.1/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;T, E, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.TryNextFuture.html\" title=\"struct futures_lite::stream::TryNextFuture\">TryNextFuture</a>&lt;'_, S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl&lt;F1, F2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/future/struct.Zip.html\" title=\"struct futures_lite::future::Zip\">Zip</a>&lt;F1, F2&gt;<span class=\"where fmt-newline\">where\n    F1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,\n    F2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/future/struct.YieldNow.html\" title=\"struct futures_lite::future::YieldNow\">YieldNow</a>"],["impl&lt;S, P, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.PartitionFuture.html\" title=\"struct futures_lite::stream::PartitionFuture\">PartitionFuture</a>&lt;S, P, B&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.1/std/primitive.bool.html\">bool</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>&gt;,</span>"],["impl&lt;'a, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.NthFuture.html\" title=\"struct futures_lite::stream::NthFuture\">NthFuture</a>&lt;'a, S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl&lt;T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/future/struct.PollFn.html\" title=\"struct futures_lite::future::PollFn\">PollFn</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.1/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;T&gt;,</span>"],["impl&lt;S, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.AllFuture.html\" title=\"struct futures_lite::stream::AllFuture\">AllFuture</a>&lt;'_, S, P&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.1/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.LastFuture.html\" title=\"struct futures_lite::stream::LastFuture\">LastFuture</a>&lt;S&gt;"],["impl&lt;T1, T2, E, F1, F2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/future/struct.TryZip.html\" title=\"struct futures_lite::future::TryZip\">TryZip</a>&lt;F1, T1, F2, T2&gt;<span class=\"where fmt-newline\">where\n    F1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T1, E&gt;&gt;,\n    F2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T2, E&gt;&gt;,</span>"],["impl&lt;T, E, S, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.TryCollectFuture.html\" title=\"struct futures_lite::stream::TryCollectFuture\">TryCollectFuture</a>&lt;S, C&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;&gt;,\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt;,</span>"],["impl&lt;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.CountFuture.html\" title=\"struct futures_lite::stream::CountFuture\">CountFuture</a>&lt;S&gt;"],["impl&lt;'a, T, E, S, F, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.TryFoldFuture.html\" title=\"struct futures_lite::stream::TryFoldFuture\">TryFoldFuture</a>&lt;'a, S, F, B&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(B, T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;B, E&gt;,</span>"],["impl&lt;'a, S, F, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.TryForEachFuture.html\" title=\"struct futures_lite::stream::TryForEachFuture\">TryForEachFuture</a>&lt;'a, S, F&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.1/std/primitive.unit.html\">()</a>, E&gt;,</span>"],["impl&lt;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.NextFuture.html\" title=\"struct futures_lite::stream::NextFuture\">NextFuture</a>&lt;'_, S&gt;"],["impl&lt;S, F, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.FoldFuture.html\" title=\"struct futures_lite::stream::FoldFuture\">FoldFuture</a>&lt;S, F, T&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(T, S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; T,</span>"],["impl&lt;S, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.CollectFuture.html\" title=\"struct futures_lite::stream::CollectFuture\">CollectFuture</a>&lt;S, C&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>&gt;,</span>"],["impl&lt;'a, S, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.PositionFuture.html\" title=\"struct futures_lite::stream::PositionFuture\">PositionFuture</a>&lt;'a, S, P&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.1/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;T, F1, F2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/future/struct.Or.html\" title=\"struct futures_lite::future::Or\">Or</a>&lt;F1, F2&gt;<span class=\"where fmt-newline\">where\n    F1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt;,\n    F2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt;,</span>"],["impl&lt;S, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.ForEachFuture.html\" title=\"struct futures_lite::stream::ForEachFuture\">ForEachFuture</a>&lt;S, F&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>),</span>"],["impl&lt;S, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.AnyFuture.html\" title=\"struct futures_lite::stream::AnyFuture\">AnyFuture</a>&lt;'_, S, P&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.1/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/future/struct.PollOnce.html\" title=\"struct futures_lite::future::PollOnce\">PollOnce</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt;,</span>"],["impl&lt;'a, S, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_lite/stream/struct.FindMapFuture.html\" title=\"struct futures_lite::stream::FindMapFuture\">FindMapFuture</a>&lt;'a, S, F&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;B&gt;,</span>"]],
"quinn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"quinn/struct.AcceptBi.html\" title=\"struct quinn::AcceptBi\">AcceptBi</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"quinn/struct.Connecting.html\" title=\"struct quinn::Connecting\">Connecting</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"quinn/struct.ReadDatagram.html\" title=\"struct quinn::ReadDatagram\">ReadDatagram</a>&lt;'_&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"quinn/struct.Accept.html\" title=\"struct quinn::Accept\">Accept</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"quinn/struct.AcceptUni.html\" title=\"struct quinn::AcceptUni\">AcceptUni</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"quinn/struct.OpenBi.html\" title=\"struct quinn::OpenBi\">OpenBi</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"quinn/struct.OpenUni.html\" title=\"struct quinn::OpenUni\">OpenUni</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"quinn/struct.ZeroRttAccepted.html\" title=\"struct quinn::ZeroRttAccepted\">ZeroRttAccepted</a>"]],
"tokio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/sync/futures/struct.Notified.html\" title=\"struct tokio::sync::futures::Notified\">Notified</a>&lt;'_&gt;"],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/task/struct.Unconstrained.html\" title=\"struct tokio::task::Unconstrained\">Unconstrained</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/time/struct.Timeout.html\" title=\"struct tokio::time::Timeout\">Timeout</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/sync/oneshot/struct.Receiver.html\" title=\"struct tokio::sync::oneshot::Receiver\">Receiver</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/time/struct.Sleep.html\" title=\"struct tokio::time::Sleep\">Sleep</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/task/struct.JoinHandle.html\" title=\"struct tokio::task::JoinHandle\">JoinHandle</a>&lt;T&gt;"],["impl&lt;T: 'static, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/task/futures/struct.TaskLocalFuture.html\" title=\"struct tokio::task::futures::TaskLocalFuture\">TaskLocalFuture</a>&lt;T, F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/task/struct.LocalSet.html\" title=\"struct tokio::task::LocalSet\">LocalSet</a>"]],
"tracing":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tracing/instrument/struct.WithDispatch.html\" title=\"struct tracing::instrument::WithDispatch\">WithDispatch</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tracing/instrument/struct.Instrumented.html\" title=\"struct tracing::instrument::Instrumented\">Instrumented</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()