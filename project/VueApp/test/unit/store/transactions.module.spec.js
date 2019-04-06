import { actions } from "../../../src/store/modules/transactions.module";
import {
  DESCRIPTION_EDIT,
  GET_TRANSACTIONS
} from "../../../src/store/actions.type";

jest.mock("vue", () => {
  // Mocking the api call, returning axios object with http methods as properties.
  return {
    axios: {
      get: jest.fn().mockImplementation(async params => {
        const { offset, limit } = params;
        // TODO: value not read
        const { id } = params;
        if (offset == 0 && limit == 15) {
          return {
            data: {
              transactions: [
                {
                  id: 6,
                  tid: "8E6F38E1-5DC7-5030-4513-8FBB237EF5DB",
                  Name: "Barclay Sears",
                  Description: "sit amet ultricies sem magna",
                  Date: "Oct 28th 2019",
                  Amount: "116.36"
                },
                {
                  id: 4,
                  tid: "74749D4F-A43F-34E8-A687-D54924B17251",
                  Name: "Cameron Thompson",
                  Description: "dolor. Fusce mi lorem, vehicula et, rutrum eu,",
                  Date: "Sep 30th 2019",
                  Amount: "807.60"
                },
                {
                  id: 12,
                  tid: "EF0C48A4-06A3-0437-F9A5-426B1BB00A5F",
                  Name: "Jackson Noel",
                  Description: "dui,",
                  Date: "Mar 16th 2019",
                  Amount: "-319.59"
                },
                {
                  id: 7,
                  tid: "4891AA6C-02DF-A955-951C-9CEEC6D69387",
                  Name: "James Melton",
                  Description:
                    "non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis",
                  Date: "Mar 13th 2019",
                  Amount: "956.72"
                },
                {
                  id: 5,
                  tid: "DB983FEF-AF70-7D2E-86BA-0C2AE749E729",
                  Name: "Dawn Alford",
                  Description: "Pellentesque ut ipsum",
                  Date: "Mar 6th 2019",
                  Amount: "820.96"
                },
                {
                  id: 14,
                  tid: "BF6A5A4C-4281-84EF-CAAA-FECA9BFD1F9F",
                  Name: "Bevis Mcfadden",
                  Description: "sagittis",
                  Date: "Jan 22nd 2019",
                  Amount: "400.65"
                },
                {
                  id: 3,
                  tid: "B743AC82-3613-13A2-2E42-E0C1F5CBF8A6",
                  Name: "Athena Smith",
                  Description: "massa lobortis ultrices. Vivamus rhoncus.",
                  Date: "Nov 11th 2018",
                  Amount: "73.67"
                },
                {
                  id: 2,
                  tid: "9F5C9912-936A-FB85-1EDB-9DA87BE7FF1E",
                  Name: "Buckminster Alvarado",
                  Description:
                    "dui, in sodales elit erat vitae risus. Duis a mi",
                  Date: "Nov 8th 2018",
                  Amount: "677.08"
                },
                {
                  id: 13,
                  tid: "412A0487-22C3-4183-3E2F-AF900725DD38",
                  Name: "Ariana Kennedy",
                  Description:
                    "eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum.",
                  Date: "Sep 7th 2018",
                  Amount: "618.05"
                },
                {
                  id: 11,
                  tid: "E267C0EE-D5EA-8F7A-96AB-E78817E6FFFA",
                  Name: "Dalton Carey",
                  Description:
                    "lectus justo eu arcu. Morbi sit amet massa. Quisque",
                  Date: "Jul 31st 2018",
                  Amount: "602.37"
                },
                {
                  id: 10,
                  tid: "96C6E014-B8DE-7ED0-B0D2-2D1577D2427C",
                  Name: "Wang Stevens",
                  Description: "ipsum",
                  Date: "Feb 12th 2018",
                  Amount: "638.14"
                },
                {
                  id: 8,
                  tid: "7BF06B3D-5DF2-9EEA-9E32-1BB284D0ABB9",
                  Name: "Medge Powell",
                  Description: "elit sed",
                  Date: "Jan 19th 2018",
                  Amount: "726.37"
                },
                {
                  id: 15,
                  tid: "398D3DD0-647D-168A-756D-2B48FEC07D7F",
                  Name: "Kasimir Byrd",
                  Description: "ridiculus mus. Donec dignissim",
                  Date: "Sep 30th 2017",
                  Amount: "159.61"
                },
                {
                  id: 1,
                  tid: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                  Name: "Kyra Lester",
                  Description: "Curabitur dictum. Phasellus in",
                  Date: "Jul 23rd 2017",
                  Amount: "345.54"
                },
                {
                  id: 9,
                  tid: "5DEB3210-1591-B14D-1D51-389F84099E84",
                  Name: "Lucas Ray",
                  Description: "morbi tristique senectus",
                  Date: "Jun 19th 2017",
                  Amount: "-439.33"
                }
              ],
              transactionCount: 15
            }
          };
        }
        if ((id = 1)) {
          return {
            data: {
              id: 1,
              tid: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
              Name: "Kyra Lester",
              Description: "Curabitur dictum. Phasellus in",
              Date: "Jul 23rd 17",
              Amount: "345.54"
            }
          };
        }
        throw new Error("Transaction not found");
      }),
      post: jest.fn().mockImplementation(async id => {
        // Editing non existing transaction
        if (id == 120) {
          return null;
        }
        if (id == 20) {
          return {
            data: {
              id: 20,
              tid: "02EE993A-5D8E-7448-0217-6874B4CAEE80",
              Name: "April Fields",
              Description: "urna convallis erat, eget tincidunt dui augue",
              Date: "Mar 4th 19",
              Amount: "865.94"
            }
          };
        }
        throw new Error("No transaction with that id");
      }),
      delete: jest.fn().mockImplementation(async id => {
        if (id == 120) {
          return null;
        }
        if (id == 2) {
          return {
            data: {
              id: 2
            }
          };
        }
        throw new Error("No transaction with that id");
      })
    }
  };
});
describe("Vuex transaction module", () => {
  it("should return data of Api call", async () => {});
});
