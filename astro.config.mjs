// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
    site: "https://kernixcord.info",
    vite: {
        server: {
            allowedHosts: ['kernixcord.info'],
        },
        preview: {
            allowedHosts: ['kernixcord.info'],
        },
    },

    integrations: [
        starlight({
            plugins: [starlightLinksValidator()],

            title: "Kernixcord",
            description: "Kernixcord is a custom desktop client for Discord",
            logo: {
                src: "./src/assets/kernixcord.svg"
            },

            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/kanvekin/Kernixcord" },
                { icon: "discord", label: "Discord", href: "https://discord.gg/PUD3BTztnC" }
            ],

            editLink: {
                baseUrl: "https://github.com/kanvekin/kernixcord.info/edit/main/"
            },

            lastUpdated: true,
            pagination: false,

            sidebar: [
                {
                    label: "Installing",
                    items: [
                        { label: "Windows", slug: "install/windows" },
                        { label: "macOS", slug: "install/mac" },
                        { label: "Linux", slug: "install/linux" }
                    ]
                },
                {
                    label: "Wiki",
                    items: [
                        { label: "Overview", slug: "wiki" },
                        {
                            label: "Linux",
                            items: [{ autogenerate: { directory: "wiki/linux" } }]
                        }
                    ]
                }
            ]
        })
    ]
});
