const TestToken = artifacts.require("TestToken")

contract('TestToken', accounts => {
  let token
  
  beforeEach(async () => {
    token = await TestToken.new({ from: accounts[0] })
  })

  // Check Total Supply
  it("checks total supply", async () => {
    const totalSupply = await token.totalSupply.call()
    const expectedSupply = 100000000000000000000000000
    assert.equal(totalSupply, expectedSupply, 'total supply is wrong')
  })

})
