import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import process from "node:process";
import { moveCharacterTool } from "./tools/moveTool.ts";
import { restCharacterTool } from "./tools/restTool.ts";
import { fightTool } from "./tools/fightTool.ts";
import { gatherTool } from "./tools/gatherTool.ts";
import { unequipTool } from "./tools/unequipTool.ts";
import { craftingTool } from "./tools/craftingTool.ts";
import { equipTool } from "./tools/equipTool.ts";
import { loopGatherTool } from "./tools/loopGatherTool.ts";
import { getMapsInfoTool } from "./tools/getMapsInfoTool.ts";

// Create an MCP server
const server = new McpServer({
  name: "Atlassian MCP Server",
  version: "1.0.0",
  description: "Model Context Protocol server for Atlassian services (Jira and Confluence)",
  vendor: "Custom"
});
// Define all tools in an array
const tools = [
  moveCharacterTool,
  restCharacterTool,
  fightTool,
  gatherTool,
  unequipTool,
  craftingTool,
  equipTool,
  loopGatherTool,
];

// Register all tools using a loop
for (const tool of tools) {
  server.tool(
    tool.name,
    tool.description,
    tool.schema,
    tool.handler
  );
}

server.tool(
  getMapsInfoTool.name,
  getMapsInfoTool.description,
  getMapsInfoTool.schema,
  getMapsInfoTool.handler
);


// Start the MCP server with StdioServerTransport
// console.log("Starting Atlassian MCP Server (stdio)...");
const transport = new StdioServerTransport();
server.connect(transport).catch(error => {
  console.error("Error connecting MCP server:", error);
  process.exit(1);
});

// console.log("MCP Server is ready");
