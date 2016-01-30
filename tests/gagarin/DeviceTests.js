describe('clinical:device', function () {
  var server = meteor();
  var client = browser(server);

  it('Should exist on the client', function () {
    return client.execute(function () {
      expect(Device).to.exist;
    });
  });

  it('Should not exist on the server', function () {
    return server.execute(function () {
      expect(Device).to.not.exist;
    });
  });

  // it('CSV.parse() parses CSV to JSON on server', function () {
  //   return server.execute(function () {
  //     var parsedData = CSV.parse();
  //   });
  // });
  // it('CSV.parse() parses CSV to JSON on client', function () {
  //   return client.execute(function () {
  //     var parsedData = CSV.parse();
  //   });
  // });
});
