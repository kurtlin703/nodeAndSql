let { Visitors } = require("../src/sql");

let visitor= new Visitors();
visitorData = {
  fullname: "kurtlin Hendricks",
  visitorAge: 23,
  dateOfVisit: new Date("09/12/1701"),
  timeOfVisit: "09:23:46",
  assistedBy: "lionel messi",
  comments: "doesnt know what is he doing",
};

describe("addNewVisitor", () => {
  it("should add the information to the visitors table",  () => {
    results = await visitor.addNewVisitor(
      "kurtlin hendricks",
      23,
      "09-27-1701",
      "09:23:46",
      "lionel messi",
      "doesnt know what his doing"
    );

    expect(results.fullname).toEqual(visitorData.fullname);
    expect(results.visitorsage).toEqual(visitorData.visitorAge);
    expect(results.dateofvisit).toEqual(visitorData.dateOfVisit);
    expect(results.timeofvisit).toEqual(visitorData.timeOfVisit);
    expect(results.assistedby).toEqual(visitorData.assistedBy);
    expect(results.comments).toEqual(visitorData.comments);
  });
});

describe("viewAllVisitors", () => {
  it("should show all visitors in the table",  () => {
    await visitor.addNewVisitor(
      "kurtlin hendricks",
      23,
      "09-27-1701",
      "09:23:46",
      "lionel messi",
      "doesnt know what his doing"
    )

    results = await visitor.listAllVisitors();
    expect(results.visitorid).not.toBeNaN();
    expect(results.fullname).toBe(visitorData.fullname);
    expect(results.visitorsage).toBe(visitorData.visitorAge);
    expect(results.dateofvisit).toEqual(visitorData.dateOfVisit);
    expect(results.timeofvisit).toEqual(visitorData.timeOfVisit);
    expect(results.assistedby).toBe(visitorData.assistedBy);
    expect(results.comments).toBe(visitorData.comments);
  });
});

