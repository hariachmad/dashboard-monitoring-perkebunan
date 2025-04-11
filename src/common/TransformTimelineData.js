/* eslint-disable no-unused-vars */
export class TransformTimeline {
  static execute(events, date) {
    const timeLine = [
      {
        startDate: "00:00:00.000",
        endDate: "03:00:00.000",
        count: 0,
      },
      {
        startDate: "03:00:00.001",
        endDate: "06:00:00.000",
        count: 0,
      },
      {
        startDate: "06:00:00.001",
        endDate: "09:00:00.000",
        count: 0,
      },
      {
        startDate: "09:00:00.001",
        endDate: "12:00:00.000",
        count: 0,
      },
      {
        startDate: "12:00:00.001",
        endDate: "15:00:00.000",
        count: 0,
      },
      {
        startDate: "15:00:00.001",
        endDate: "18:00:00.000",
        count: 0,
      },
      {
        startDate: "18:00:00.001",
        endDate: "21:00:00.000",
        count: 0,
      },
      {
        startDate: "21:00:00.001",
        endDate: "23:59:59.000",
        count: 0,
      },
    ];

    const set = [];
    events.map((data) => {
      const onlineDateUTC = new Date(
        Date.UTC(
          new Date(data.onlineDate).getUTCFullYear(),
          new Date(data.onlineDate).getUTCMonth(),
          new Date(data.onlineDate).getUTCDate(),
          0,
          0,
          0,
          0
        )
      );
      if (onlineDateUTC.toISOString().split("T")[0] == new Date(date).toISOString().split("T")[0]) {
        set.push({
          ip: data.ip,
          onlineDate: data.onlineDate,
        });
      }
    });

    const userGetEventsDecrementField = set.map((data) => {
      const { ip, ...newObj } = data;
      const timePart = newObj.onlineDate.split("T")[1].replace("Z", "");
      return timePart;
    });

    userGetEventsDecrementField.map((data) => {
      timeLine.map((dataTimeLine) => {
        const dummyDate = new Date(`1970-01-01T${data}Z`);
        const dummyStartDate = new Date(
          `1970-01-01T${dataTimeLine.startDate}Z`
        );
        const dummyEndDate = new Date(`1970-01-01T${dataTimeLine.endDate}Z`);

        if (dummyDate >= dummyStartDate && dummyDate <= dummyEndDate) {
          dataTimeLine.count += 1;
        }
      });
    });

    return timeLine;
  }
}
