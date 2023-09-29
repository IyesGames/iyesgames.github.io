(function() {var implementors = {
"bevy":[],
"bevy_diagnostic":[["impl&lt;'w, 's&gt; <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a> for <a class=\"struct\" href=\"bevy_diagnostic/struct.Diagnostics.html\" title=\"struct bevy_diagnostic::Diagnostics\">Diagnostics</a>&lt;'w, 's&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_diagnostic/struct.DiagnosticsStore.html\" title=\"struct bevy_diagnostic::DiagnosticsStore\">DiagnosticsStore</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,\n    <a class=\"struct\" href=\"bevy_ecs/system/system_param/struct.Deferred.html\" title=\"struct bevy_ecs::system::system_param::Deferred\">Deferred</a>&lt;'s, DiagnosticsBuffer&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,</span>"]],
"bevy_ecs":[],
"bevy_fluent":[["impl&lt;'w, 's&gt; <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a> for <a class=\"struct\" href=\"bevy_fluent/struct.LocalizationBuilder.html\" title=\"struct bevy_fluent::LocalizationBuilder\">LocalizationBuilder</a>&lt;'w&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_asset/assets/struct.Assets.html\" title=\"struct bevy_asset::assets::Assets\">Assets</a>&lt;<a class=\"struct\" href=\"bevy_fluent/struct.BundleAsset.html\" title=\"struct bevy_fluent::BundleAsset\">BundleAsset</a>&gt;&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_fluent/prelude/struct.Locale.html\" title=\"struct bevy_fluent::prelude::Locale\">Locale</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,</span>"]],
"bevy_gizmos":[["impl&lt;'w, 's&gt; <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a> for <a class=\"struct\" href=\"bevy_gizmos/gizmos/struct.Gizmos.html\" title=\"struct bevy_gizmos::gizmos::Gizmos\">Gizmos</a>&lt;'s&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"bevy_ecs/system/system_param/struct.Deferred.html\" title=\"struct bevy_ecs::system::system_param::Deferred\">Deferred</a>&lt;'s, GizmoBuffer&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,</span>"]],
"bevy_internal":[],
"bevy_render":[["impl&lt;'w, 's&gt; <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a> for <a class=\"struct\" href=\"bevy_render/texture/struct.FallbackImagesDepth.html\" title=\"struct bevy_render::texture::FallbackImagesDepth\">FallbackImagesDepth</a>&lt;'w&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.ResMut.html\" title=\"struct bevy_ecs::change_detection::ResMut\">ResMut</a>&lt;'w, <a class=\"struct\" href=\"bevy_render/texture/struct.FallbackImageDepthCache.html\" title=\"struct bevy_render::texture::FallbackImageDepthCache\">FallbackImageDepthCache</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_render/renderer/struct.RenderDevice.html\" title=\"struct bevy_render::renderer::RenderDevice\">RenderDevice</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_render/renderer/struct.RenderQueue.html\" title=\"struct bevy_render::renderer::RenderQueue\">RenderQueue</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_render/texture/struct.DefaultImageSampler.html\" title=\"struct bevy_render::texture::DefaultImageSampler\">DefaultImageSampler</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,</span>"],["impl&lt;'w, 's&gt; <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a> for <a class=\"struct\" href=\"bevy_render/texture/struct.FallbackImagesMsaa.html\" title=\"struct bevy_render::texture::FallbackImagesMsaa\">FallbackImagesMsaa</a>&lt;'w&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.ResMut.html\" title=\"struct bevy_ecs::change_detection::ResMut\">ResMut</a>&lt;'w, <a class=\"struct\" href=\"bevy_render/texture/struct.FallbackImageMsaaCache.html\" title=\"struct bevy_render::texture::FallbackImageMsaaCache\">FallbackImageMsaaCache</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_render/renderer/struct.RenderDevice.html\" title=\"struct bevy_render::renderer::RenderDevice\">RenderDevice</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_render/renderer/struct.RenderQueue.html\" title=\"struct bevy_render::renderer::RenderQueue\">RenderQueue</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,\n    <a class=\"struct\" href=\"bevy_ecs/change_detection/struct.Res.html\" title=\"struct bevy_ecs::change_detection::Res\">Res</a>&lt;'w, <a class=\"struct\" href=\"bevy_render/texture/struct.DefaultImageSampler.html\" title=\"struct bevy_render::texture::DefaultImageSampler\">DefaultImageSampler</a>&gt;: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a> for <a class=\"struct\" href=\"bevy_render/struct.Extract.html\" title=\"struct bevy_render::Extract\">Extract</a>&lt;'_, '_, P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"bevy_ecs/system/system_param/trait.ReadOnlySystemParam.html\" title=\"trait bevy_ecs::system::system_param::ReadOnlySystemParam\">ReadOnlySystemParam</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()