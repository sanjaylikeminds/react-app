import React from "react";

export default function Community() {
  return (
    <div className="likemind-community">
      {/* Logged in user */}

      <likeminds-sdk
        api-key="539375f3-7b54-4600-b190-fd9efe7ceaf8"
        user-unique-id="5d255f56-12d1-4e87-a618-9ef46737f338"
        user-name="Test User"
        is-guest="false"
      ></likeminds-sdk>
      {/* Logged in user */}

      {/* Guest user */}
      {/* <likeminds-sdk
        api-key="539375f3-7b54-4600-b190-fd9efe7ceaf8"
        user-unique-id="xxxxxx"
        user-name="guest"
        is-guest="true"
      ></likeminds-sdk> */}
      {/* Guest user */}
    </div>
  );
}
