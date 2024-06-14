import server from "./server";

const main = () => {

  process.on("SIGTERM",()=>{
    server.close(()=>{
      console.log("server is closed")
    });
  });

  process.on("SIGINT",()=>{
    server.close(()=>{
      console.log("server is closed")
    });
  });


};

// This was just here to force a linting error for now to demonstrate/test the
// eslint pipeline. You can uncomment this and run "yarn lint:check" to test the
// linting.
// const x: number[] = [1, 2];
// const y: Array<number> = [3, 4];
// if (x == y) {
//   console.log("equal!");
// }

main();
