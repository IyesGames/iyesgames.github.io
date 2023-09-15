(function() {var implementors = {
"bevy":[],
"bevy_a11y":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_a11y/struct.AccessibilityPlugin.html\" title=\"struct bevy_a11y::AccessibilityPlugin\">AccessibilityPlugin</a>"]],
"bevy_animation":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_animation/struct.AnimationPlugin.html\" title=\"struct bevy_animation::AnimationPlugin\">AnimationPlugin</a>"]],
"bevy_app":[],
"bevy_asset":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_asset/struct.AssetPlugin.html\" title=\"struct bevy_asset::AssetPlugin\">AssetPlugin</a>"],["impl&lt;T: <a class=\"trait\" href=\"bevy_asset/trait.Asset.html\" title=\"trait bevy_asset::Asset\">Asset</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_asset/diagnostic/struct.AssetCountDiagnosticsPlugin.html\" title=\"struct bevy_asset::diagnostic::AssetCountDiagnosticsPlugin\">AssetCountDiagnosticsPlugin</a>&lt;T&gt;"]],
"bevy_audio":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_audio/struct.AudioPlugin.html\" title=\"struct bevy_audio::AudioPlugin\">AudioPlugin</a>"]],
"bevy_common_assets":[["impl&lt;A&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_common_assets/ron/struct.RonAssetPlugin.html\" title=\"struct bevy_common_assets::ron::RonAssetPlugin\">RonAssetPlugin</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    for&lt;'de&gt; A: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"bevy_asset/loader/trait.Asset.html\" title=\"trait bevy_asset::loader::Asset\">Asset</a>,</span>"],["impl&lt;A&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_common_assets/toml/struct.TomlAssetPlugin.html\" title=\"struct bevy_common_assets::toml::TomlAssetPlugin\">TomlAssetPlugin</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    for&lt;'de&gt; A: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"bevy_asset/loader/trait.Asset.html\" title=\"trait bevy_asset::loader::Asset\">Asset</a>,</span>"]],
"bevy_core":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core/struct.TaskPoolPlugin.html\" title=\"struct bevy_core::TaskPoolPlugin\">TaskPoolPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core/struct.TypeRegistrationPlugin.html\" title=\"struct bevy_core::TypeRegistrationPlugin\">TypeRegistrationPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core/struct.FrameCountPlugin.html\" title=\"struct bevy_core::FrameCountPlugin\">FrameCountPlugin</a>"]],
"bevy_core_pipeline":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/contrast_adaptive_sharpening/struct.CASPlugin.html\" title=\"struct bevy_core_pipeline::contrast_adaptive_sharpening::CASPlugin\">CASPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/upscaling/struct.UpscalingPlugin.html\" title=\"struct bevy_core_pipeline::upscaling::UpscalingPlugin\">UpscalingPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/tonemapping/struct.TonemappingPlugin.html\" title=\"struct bevy_core_pipeline::tonemapping::TonemappingPlugin\">TonemappingPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/core_3d/struct.Core3dPlugin.html\" title=\"struct bevy_core_pipeline::core_3d::Core3dPlugin\">Core3dPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/blit/struct.BlitPlugin.html\" title=\"struct bevy_core_pipeline::blit::BlitPlugin\">BlitPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/struct.CorePipelinePlugin.html\" title=\"struct bevy_core_pipeline::CorePipelinePlugin\">CorePipelinePlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/msaa_writeback/struct.MsaaWritebackPlugin.html\" title=\"struct bevy_core_pipeline::msaa_writeback::MsaaWritebackPlugin\">MsaaWritebackPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/core_2d/struct.Core2dPlugin.html\" title=\"struct bevy_core_pipeline::core_2d::Core2dPlugin\">Core2dPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/experimental/taa/struct.TemporalAntiAliasPlugin.html\" title=\"struct bevy_core_pipeline::experimental::taa::TemporalAntiAliasPlugin\">TemporalAntiAliasPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/bloom/struct.BloomPlugin.html\" title=\"struct bevy_core_pipeline::bloom::BloomPlugin\">BloomPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_core_pipeline/fxaa/struct.FxaaPlugin.html\" title=\"struct bevy_core_pipeline::fxaa::FxaaPlugin\">FxaaPlugin</a>"]],
"bevy_diagnostic":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_diagnostic/struct.DiagnosticsPlugin.html\" title=\"struct bevy_diagnostic::DiagnosticsPlugin\">DiagnosticsPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_diagnostic/struct.FrameTimeDiagnosticsPlugin.html\" title=\"struct bevy_diagnostic::FrameTimeDiagnosticsPlugin\">FrameTimeDiagnosticsPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_diagnostic/struct.SystemInformationDiagnosticsPlugin.html\" title=\"struct bevy_diagnostic::SystemInformationDiagnosticsPlugin\">SystemInformationDiagnosticsPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_diagnostic/struct.LogDiagnosticsPlugin.html\" title=\"struct bevy_diagnostic::LogDiagnosticsPlugin\">LogDiagnosticsPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_diagnostic/struct.EntityCountDiagnosticsPlugin.html\" title=\"struct bevy_diagnostic::EntityCountDiagnosticsPlugin\">EntityCountDiagnosticsPlugin</a>"]],
"bevy_ecs_tilemap":[["impl&lt;M: <a class=\"trait\" href=\"bevy_ecs_tilemap/prelude/trait.MaterialTilemap.html\" title=\"trait bevy_ecs_tilemap::prelude::MaterialTilemap\">MaterialTilemap</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_ecs_tilemap/prelude/struct.MaterialTilemapPlugin.html\" title=\"struct bevy_ecs_tilemap::prelude::MaterialTilemapPlugin\">MaterialTilemapPlugin</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M::<a class=\"associatedtype\" href=\"bevy_render/render_resource/bind_group/trait.AsBindGroup.html#associatedtype.Data\" title=\"type bevy_render::render_resource::bind_group::AsBindGroup::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_ecs_tilemap/struct.TilemapPlugin.html\" title=\"struct bevy_ecs_tilemap::TilemapPlugin\">TilemapPlugin</a>"]],
"bevy_fluent":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_fluent/struct.FluentPlugin.html\" title=\"struct bevy_fluent::FluentPlugin\">FluentPlugin</a>"]],
"bevy_gilrs":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_gilrs/struct.GilrsPlugin.html\" title=\"struct bevy_gilrs::GilrsPlugin\">GilrsPlugin</a>"]],
"bevy_gizmos":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_gizmos/struct.GizmoPlugin.html\" title=\"struct bevy_gizmos::GizmoPlugin\">GizmoPlugin</a>"]],
"bevy_gltf":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_gltf/struct.GltfPlugin.html\" title=\"struct bevy_gltf::GltfPlugin\">GltfPlugin</a>"]],
"bevy_hierarchy":[["impl&lt;T: <a class=\"trait\" href=\"bevy_ecs/component/trait.Component.html\" title=\"trait bevy_ecs::component::Component\">Component</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_hierarchy/struct.ValidParentCheckPlugin.html\" title=\"struct bevy_hierarchy::ValidParentCheckPlugin\">ValidParentCheckPlugin</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_hierarchy/struct.HierarchyPlugin.html\" title=\"struct bevy_hierarchy::HierarchyPlugin\">HierarchyPlugin</a>"]],
"bevy_input":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_input/struct.InputPlugin.html\" title=\"struct bevy_input::InputPlugin\">InputPlugin</a>"]],
"bevy_internal":[],
"bevy_log":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_log/struct.LogPlugin.html\" title=\"struct bevy_log::LogPlugin\">LogPlugin</a>"]],
"bevy_pbr":[["impl&lt;M: <a class=\"trait\" href=\"bevy_pbr/trait.Material.html\" title=\"trait bevy_pbr::Material\">Material</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_pbr/struct.MaterialPlugin.html\" title=\"struct bevy_pbr::MaterialPlugin\">MaterialPlugin</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M::<a class=\"associatedtype\" href=\"bevy_render/render_resource/bind_group/trait.AsBindGroup.html#associatedtype.Data\" title=\"type bevy_render::render_resource::bind_group::AsBindGroup::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;M: <a class=\"trait\" href=\"bevy_pbr/trait.Material.html\" title=\"trait bevy_pbr::Material\">Material</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_pbr/struct.PrepassPipelinePlugin.html\" title=\"struct bevy_pbr::PrepassPipelinePlugin\">PrepassPipelinePlugin</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M::<a class=\"associatedtype\" href=\"bevy_render/render_resource/bind_group/trait.AsBindGroup.html#associatedtype.Data\" title=\"type bevy_render::render_resource::bind_group::AsBindGroup::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_pbr/struct.FogPlugin.html\" title=\"struct bevy_pbr::FogPlugin\">FogPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_pbr/struct.MeshRenderPlugin.html\" title=\"struct bevy_pbr::MeshRenderPlugin\">MeshRenderPlugin</a>"],["impl&lt;M: <a class=\"trait\" href=\"bevy_pbr/trait.Material.html\" title=\"trait bevy_pbr::Material\">Material</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_pbr/struct.PrepassPlugin.html\" title=\"struct bevy_pbr::PrepassPlugin\">PrepassPlugin</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M::<a class=\"associatedtype\" href=\"bevy_render/render_resource/bind_group/trait.AsBindGroup.html#associatedtype.Data\" title=\"type bevy_render::render_resource::bind_group::AsBindGroup::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_pbr/wireframe/struct.WireframePlugin.html\" title=\"struct bevy_pbr::wireframe::WireframePlugin\">WireframePlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_pbr/struct.PbrPlugin.html\" title=\"struct bevy_pbr::PbrPlugin\">PbrPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_pbr/struct.ScreenSpaceAmbientOcclusionPlugin.html\" title=\"struct bevy_pbr::ScreenSpaceAmbientOcclusionPlugin\">ScreenSpaceAmbientOcclusionPlugin</a>"]],
"bevy_prototype_lyon":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_prototype_lyon/render/struct.ShapeMaterialPlugin.html\" title=\"struct bevy_prototype_lyon::render::ShapeMaterialPlugin\">ShapeMaterialPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_prototype_lyon/plugin/struct.ShapePlugin.html\" title=\"struct bevy_prototype_lyon::plugin::ShapePlugin\">ShapePlugin</a>"]],
"bevy_render":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/mesh/morph/struct.MorphPlugin.html\" title=\"struct bevy_render::mesh::morph::MorphPlugin\">MorphPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/globals/struct.GlobalsPlugin.html\" title=\"struct bevy_render::globals::GlobalsPlugin\">GlobalsPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/view/struct.ViewPlugin.html\" title=\"struct bevy_render::view::ViewPlugin\">ViewPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/view/window/struct.WindowRenderPlugin.html\" title=\"struct bevy_render::view::window::WindowRenderPlugin\">WindowRenderPlugin</a>"],["impl&lt;A: <a class=\"trait\" href=\"bevy_render/render_asset/trait.RenderAsset.html\" title=\"trait bevy_render::render_asset::RenderAsset\">RenderAsset</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/render_asset/struct.RenderAssetPlugin.html\" title=\"struct bevy_render::render_asset::RenderAssetPlugin\">RenderAssetPlugin</a>&lt;A&gt;"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/view/window/screenshot/struct.ScreenshotPlugin.html\" title=\"struct bevy_render::view::window::screenshot::ScreenshotPlugin\">ScreenshotPlugin</a>"],["impl&lt;T: <a class=\"trait\" href=\"bevy_render/camera/trait.CameraProjection.html\" title=\"trait bevy_render::camera::CameraProjection\">CameraProjection</a> + <a class=\"trait\" href=\"bevy_ecs/component/trait.Component.html\" title=\"trait bevy_ecs::component::Component\">Component</a> + <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.GetTypeRegistration.html\" title=\"trait bevy_reflect::type_registry::GetTypeRegistration\">GetTypeRegistration</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/camera/struct.CameraProjectionPlugin.html\" title=\"struct bevy_render::camera::CameraProjectionPlugin\">CameraProjectionPlugin</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/struct.RenderPlugin.html\" title=\"struct bevy_render::RenderPlugin\">RenderPlugin</a>"],["impl&lt;C: <a class=\"trait\" href=\"bevy_ecs/component/trait.Component.html\" title=\"trait bevy_ecs::component::Component\">Component</a> + <a class=\"trait\" href=\"bevy_render/render_resource/trait.ShaderType.html\" title=\"trait bevy_render::render_resource::ShaderType\">ShaderType</a> + <a class=\"trait\" href=\"bevy_render/render_resource/encase/internal/trait.WriteInto.html\" title=\"trait bevy_render::render_resource::encase::internal::WriteInto\">WriteInto</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/extract_component/struct.UniformComponentPlugin.html\" title=\"struct bevy_render::extract_component::UniformComponentPlugin\">UniformComponentPlugin</a>&lt;C&gt;"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/camera/struct.CameraPlugin.html\" title=\"struct bevy_render::camera::CameraPlugin\">CameraPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/mesh/struct.MeshPlugin.html\" title=\"struct bevy_render::mesh::MeshPlugin\">MeshPlugin</a>"],["impl&lt;R: <a class=\"trait\" href=\"bevy_render/extract_resource/trait.ExtractResource.html\" title=\"trait bevy_render::extract_resource::ExtractResource\">ExtractResource</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/extract_resource/struct.ExtractResourcePlugin.html\" title=\"struct bevy_render::extract_resource::ExtractResourcePlugin\">ExtractResourcePlugin</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/texture/struct.ImagePlugin.html\" title=\"struct bevy_render::texture::ImagePlugin\">ImagePlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/pipelined_rendering/struct.PipelinedRenderingPlugin.html\" title=\"struct bevy_render::pipelined_rendering::PipelinedRenderingPlugin\">PipelinedRenderingPlugin</a>"],["impl&lt;C: <a class=\"trait\" href=\"bevy_render/extract_component/trait.ExtractComponent.html\" title=\"trait bevy_render::extract_component::ExtractComponent\">ExtractComponent</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/extract_component/struct.ExtractComponentPlugin.html\" title=\"struct bevy_render::extract_component::ExtractComponentPlugin\">ExtractComponentPlugin</a>&lt;C&gt;"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_render/view/visibility/struct.VisibilityPlugin.html\" title=\"struct bevy_render::view::visibility::VisibilityPlugin\">VisibilityPlugin</a>"]],
"bevy_scene":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_scene/struct.ScenePlugin.html\" title=\"struct bevy_scene::ScenePlugin\">ScenePlugin</a>"]],
"bevy_sprite":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_sprite/struct.ColorMaterialPlugin.html\" title=\"struct bevy_sprite::ColorMaterialPlugin\">ColorMaterialPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_sprite/struct.SpritePlugin.html\" title=\"struct bevy_sprite::SpritePlugin\">SpritePlugin</a>"],["impl&lt;M: <a class=\"trait\" href=\"bevy_sprite/trait.Material2d.html\" title=\"trait bevy_sprite::Material2d\">Material2d</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_sprite/struct.Material2dPlugin.html\" title=\"struct bevy_sprite::Material2dPlugin\">Material2dPlugin</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M::<a class=\"associatedtype\" href=\"bevy_render/render_resource/bind_group/trait.AsBindGroup.html#associatedtype.Data\" title=\"type bevy_render::render_resource::bind_group::AsBindGroup::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_sprite/struct.Mesh2dRenderPlugin.html\" title=\"struct bevy_sprite::Mesh2dRenderPlugin\">Mesh2dRenderPlugin</a>"]],
"bevy_text":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_text/struct.TextPlugin.html\" title=\"struct bevy_text::TextPlugin\">TextPlugin</a>"]],
"bevy_time":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_time/struct.TimePlugin.html\" title=\"struct bevy_time::TimePlugin\">TimePlugin</a>"]],
"bevy_transform":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_transform/struct.TransformPlugin.html\" title=\"struct bevy_transform::TransformPlugin\">TransformPlugin</a>"]],
"bevy_tweening":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_tweening/struct.TweeningPlugin.html\" title=\"struct bevy_tweening::TweeningPlugin\">TweeningPlugin</a>"]],
"bevy_ui":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_ui/struct.UiPlugin.html\" title=\"struct bevy_ui::UiPlugin\">UiPlugin</a>"]],
"bevy_window":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_window/struct.WindowPlugin.html\" title=\"struct bevy_window::WindowPlugin\">WindowPlugin</a>"]],
"bevy_winit":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_winit/struct.WinitPlugin.html\" title=\"struct bevy_winit::WinitPlugin\">WinitPlugin</a>"],["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"bevy_winit/accessibility/struct.AccessibilityPlugin.html\" title=\"struct bevy_winit::accessibility::AccessibilityPlugin\">AccessibilityPlugin</a>"]],
"iyes_bevy_extras":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"iyes_bevy_extras/d2/struct.WorldCursorPlugin.html\" title=\"struct iyes_bevy_extras::d2::WorldCursorPlugin\">WorldCursorPlugin</a>"]],
"iyes_progress":[["impl&lt;S: <a class=\"trait\" href=\"bevy_ecs/schedule/state/trait.States.html\" title=\"trait bevy_ecs::schedule::state::States\">States</a>&gt; <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"iyes_progress/struct.ProgressPlugin.html\" title=\"struct iyes_progress::ProgressPlugin\">ProgressPlugin</a>&lt;S&gt;"]],
"iyes_ui":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"iyes_ui/struct.UiExtrasPlugin.html\" title=\"struct iyes_ui::UiExtrasPlugin\">UiExtrasPlugin</a>"]],
"minewars":[["impl <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/assets/struct.AssetsPlugin.html\" title=\"struct minewars::assets::AssetsPlugin\">AssetsPlugin</a>"],["impl <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/locale/struct.LocalePlugin.html\" title=\"struct minewars::locale::LocalePlugin\">LocalePlugin</a>"],["impl <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/cli/struct.CliPlugin.html\" title=\"struct minewars::cli::CliPlugin\">CliPlugin</a>"],["impl <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/screens/splash/struct.SplashesPlugin.html\" title=\"struct minewars::screens::splash::SplashesPlugin\">SplashesPlugin</a>"],["impl <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/ui/hud/struct.HudPlugin.html\" title=\"struct minewars::ui::hud::HudPlugin\">HudPlugin</a>"],["impl&lt;S: <a class=\"trait\" href=\"minewars/prelude/trait.States.html\" title=\"trait minewars::prelude::States\">States</a>&gt; <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/screens/splash/struct.SplashscreenPlugin.html\" title=\"struct minewars::screens::splash::SplashscreenPlugin\">SplashscreenPlugin</a>&lt;S&gt;"],["impl <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/ui/mainmenu/struct.MainMenuPlugin.html\" title=\"struct minewars::ui::mainmenu::MainMenuPlugin\">MainMenuPlugin</a>"],["impl&lt;S: <a class=\"trait\" href=\"minewars/prelude/trait.States.html\" title=\"trait minewars::prelude::States\">States</a>&gt; <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/screens/loading/struct.LoadscreenPlugin.html\" title=\"struct minewars::screens::loading::LoadscreenPlugin\">LoadscreenPlugin</a>&lt;S&gt;"],["impl <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/ui/struct.UiPlugin.html\" title=\"struct minewars::ui::UiPlugin\">UiPlugin</a>"],["impl <a class=\"trait\" href=\"minewars/prelude/trait.Plugin.html\" title=\"trait minewars::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"minewars/settings/struct.SettingsPlugin.html\" title=\"struct minewars::settings::SettingsPlugin\">SettingsPlugin</a>"]],
"mw_common":[["impl <a class=\"trait\" href=\"mw_common/prelude/trait.Plugin.html\" title=\"trait mw_common::prelude::Plugin\">Plugin</a> for <a class=\"struct\" href=\"mw_common/bevy/struct.MwCommonPlugin.html\" title=\"struct mw_common::bevy::MwCommonPlugin\">MwCommonPlugin</a>"]],
"mw_proprietary_client":[["impl <a class=\"trait\" href=\"bevy_app/plugin/trait.Plugin.html\" title=\"trait bevy_app::plugin::Plugin\">Plugin</a> for <a class=\"struct\" href=\"mw_proprietary_client/struct.MwProprietaryPlugin.html\" title=\"struct mw_proprietary_client::MwProprietaryPlugin\">MwProprietaryPlugin</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()