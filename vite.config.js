import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/WebsitePortfolio/', 
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'websitePages/GodotPage/UltimateTickTackToeGodotGame/*',
            dest: 'websitePages/GodotPage/UltimateTickTackToeGodotGame',
          },
        ],
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          threed: 'websitePages/3dPage/3D.html',
          godotGame: 'websitePages/GodotPage/GodotGame.html',
          MCP: 'websitePages/MCPPage/MCP.html',
        },
      },
    },
  };
});