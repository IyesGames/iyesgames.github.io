(function() {var implementors = {
"alsa":[["impl&lt;'a, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"alsa/pcm/struct.IO.html\" title=\"struct alsa::pcm::IO\">IO</a>&lt;'a, S&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"alsa/rawmidi/struct.IO.html\" title=\"struct alsa::rawmidi::IO\">IO</a>&lt;'a&gt;"]],
"base64":[["impl&lt;'e, E: <a class=\"trait\" href=\"base64/engine/trait.Engine.html\" title=\"trait base64::engine::Engine\">Engine</a>, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"base64/read/struct.DecoderReader.html\" title=\"struct base64::read::DecoderReader\">DecoderReader</a>&lt;'e, E, R&gt;"]],
"bytes":[["impl&lt;B: <a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/buf/struct.Reader.html\" title=\"struct bytes::buf::Reader\">Reader</a>&lt;B&gt;"]],
"flate2":[["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.DeflateEncoder.html\" title=\"struct flate2::read::DeflateEncoder\">DeflateEncoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.GzDecoder.html\" title=\"struct flate2::write::GzDecoder\">GzDecoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.DeflateEncoder.html\" title=\"struct flate2::bufread::DeflateEncoder\">DeflateEncoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.ZlibDecoder.html\" title=\"struct flate2::write::ZlibDecoder\">ZlibDecoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.GzDecoder.html\" title=\"struct flate2::read::GzDecoder\">GzDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.GzEncoder.html\" title=\"struct flate2::bufread::GzEncoder\">GzEncoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.DeflateDecoder.html\" title=\"struct flate2::write::DeflateDecoder\">DeflateDecoder</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.DeflateEncoder.html\" title=\"struct flate2::write::DeflateEncoder\">DeflateEncoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.ZlibEncoder.html\" title=\"struct flate2::read::ZlibEncoder\">ZlibEncoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.ZlibDecoder.html\" title=\"struct flate2::read::ZlibDecoder\">ZlibDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/struct.CrcReader.html\" title=\"struct flate2::CrcReader\">CrcReader</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.GzEncoder.html\" title=\"struct flate2::read::GzEncoder\">GzEncoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.ZlibEncoder.html\" title=\"struct flate2::bufread::ZlibEncoder\">ZlibEncoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.DeflateDecoder.html\" title=\"struct flate2::read::DeflateDecoder\">DeflateDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.MultiGzDecoder.html\" title=\"struct flate2::read::MultiGzDecoder\">MultiGzDecoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.ZlibEncoder.html\" title=\"struct flate2::write::ZlibEncoder\">ZlibEncoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.MultiGzDecoder.html\" title=\"struct flate2::bufread::MultiGzDecoder\">MultiGzDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.ZlibDecoder.html\" title=\"struct flate2::bufread::ZlibDecoder\">ZlibDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.DeflateDecoder.html\" title=\"struct flate2::bufread::DeflateDecoder\">DeflateDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.GzDecoder.html\" title=\"struct flate2::bufread::GzDecoder\">GzDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.GzEncoder.html\" title=\"struct flate2::write::GzEncoder\">GzEncoder</a>&lt;R&gt;"]],
"futures_lite":[["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"futures_lite/io/struct.AsyncAsSync.html\" title=\"struct futures_lite::io::AsyncAsSync\">AsyncAsSync</a>&lt;'_, '_, T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BlockOn.html\" title=\"struct futures_lite::io::BlockOn\">BlockOn</a>&lt;T&gt;"]],
"image":[["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"image/codecs/hdr/struct.HdrReader.html\" title=\"struct image::codecs::hdr::HdrReader\">HdrReader</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"image/codecs/png/struct.PngReader.html\" title=\"struct image::codecs::png::PngReader\">PngReader</a>&lt;R&gt;"]],
"mio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;<a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"]],
"rand_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for dyn <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>"]],
"rustls":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.Reader.html\" title=\"struct rustls::Reader\">Reader</a>&lt;'a&gt;"],["impl&lt;C, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.StreamOwned.html\" title=\"struct rustls::StreamOwned\">StreamOwned</a>&lt;C, T&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"struct\" href=\"rustls/struct.ConnectionCommon.html\" title=\"struct rustls::ConnectionCommon\">ConnectionCommon</a>&lt;S&gt;&gt;,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    S: <a class=\"trait\" href=\"rustls/trait.SideData.html\" title=\"trait rustls::SideData\">SideData</a>,</span>"],["impl&lt;'a, C, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.Stream.html\" title=\"struct rustls::Stream\">Stream</a>&lt;'a, C, T&gt;<span class=\"where fmt-newline\">where\n    C: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"struct\" href=\"rustls/struct.ConnectionCommon.html\" title=\"struct rustls::ConnectionCommon\">ConnectionCommon</a>&lt;S&gt;&gt;,\n    T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    S: <a class=\"trait\" href=\"rustls/trait.SideData.html\" title=\"trait rustls::SideData\">SideData</a>,</span>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/server/struct.ReadEarlyData.html\" title=\"struct rustls::server::ReadEarlyData\">ReadEarlyData</a>&lt;'a&gt;"]],
"ruzstd":[["impl <a class=\"trait\" href=\"ruzstd/io/trait.Read.html\" title=\"trait ruzstd::io::Read\">Read</a> for <a class=\"struct\" href=\"ruzstd/frame_decoder/struct.FrameDecoder.html\" title=\"struct ruzstd::frame_decoder::FrameDecoder\">FrameDecoder</a>"],["impl <a class=\"trait\" href=\"ruzstd/io/trait.Read.html\" title=\"trait ruzstd::io::Read\">Read</a> for <a class=\"struct\" href=\"ruzstd/decoding/decodebuffer/struct.Decodebuffer.html\" title=\"struct ruzstd::decoding::decodebuffer::Decodebuffer\">Decodebuffer</a>"],["impl&lt;READ: <a class=\"trait\" href=\"ruzstd/io/trait.Read.html\" title=\"trait ruzstd::io::Read\">Read</a>, DEC: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/borrow/trait.BorrowMut.html\" title=\"trait core::borrow::BorrowMut\">BorrowMut</a>&lt;<a class=\"struct\" href=\"ruzstd/frame_decoder/struct.FrameDecoder.html\" title=\"struct ruzstd::frame_decoder::FrameDecoder\">FrameDecoder</a>&gt;&gt; <a class=\"trait\" href=\"ruzstd/io/trait.Read.html\" title=\"trait ruzstd::io::Read\">Read</a> for <a class=\"struct\" href=\"ruzstd/streaming_decoder/struct.StreamingDecoder.html\" title=\"struct ruzstd::streaming_decoder::StreamingDecoder\">StreamingDecoder</a>&lt;READ, DEC&gt;"]],
"smithay_client_toolkit":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"smithay_client_toolkit/data_device/struct.ReadPipe.html\" title=\"struct smithay_client_toolkit::data_device::ReadPipe\">ReadPipe</a>"]],
"socket2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()