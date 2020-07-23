const topologyData = {
    nodes: [
        // ISPs
        { id: 0, x: 400, y: -100, name: "ISP1", device_type: "cloud", color: "grey" },
        { id: 1, x: 600, y: -100, name: "ISP2", device_type: "cloud", color: "grey" },

        // Routers
        { id: 2, x: 400, y: 0, name: "Edge1", device_type: "router", color: "red" },
        { id: 3, x: 600, y: 0, name: "Edge2", device_type: "router", color: "red" },

        // Switches
        { id: 4, x: 400, y: 100, name: "Switch1", device_type: "switch" },
        { id: 5, x: 600, y: 100, name: "Switch2", device_type: "switch" },

        // Servers
        { id: 6, x: 200, y: 200, name: "ESX1", device_type: "server" },
        { id: 7, x: 400, y: 200, name: "ESX2", device_type: "server" },
        { id: 8, x: 600, y: 200, name: "ESX3", device_type: "server" },
        { id: 9, x: 800, y: 200, name: "ESX4", device_type: "server" },

        // SAN
        { id: 10, x: 500, y: 300, name: "SAN", device_type: "server" }
    ],
    links: [
      // WAN to routers
      { source: 0, target: 2, color: "green" },
      { source: 1, target: 3 },
  
      // Routers to switches
      { source: 2, target: 4, color: "green" },
      { source: 2, target: 5 },
      { source: 3, target: 4 },
      { source: 3, target: 5 },
  
      // Switches to Switches
      { source: 4, target: 5 },
      { source: 4, target: 5 },
  
      // Servers to Switches
      { source: 6, target: 4, color: "green" },
      { source: 6, target: 5, color: "red" },
      { source: 7, target: 4, color: "green" },
      { source: 7, target: 5, color: "red" },
      { source: 8, target: 4, color: "green" },
      { source: 8, target: 5, color: "red" },
      { source: 9, target: 4, color: "green" },
      { source: 9, target: 5, color: "red" },
  
      // SAN to Switches
      { source: 10, target: 4, color: "red" },
      { source: 10, target: 4, color: "red" },
      { source: 10, target: 5, color: "red" },
      { source: 10, target: 5, color: "red" }
    ]
};