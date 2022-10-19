const test2 = require("./server")

describe("test function", () => {
    it("should be running",async ()=> {
        const data = await test2()
        // eslint-disable-next-line no-unused-expressions
        expect(data).resolves;
        setTimeout(()=>{
            console.log("test done")
           },2000)
    });
})