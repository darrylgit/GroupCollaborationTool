import React, { useContext, useState, useEffect } from "react";
import { ProviderContext } from "../Provider";

export default function(props) {
  const {
    match: {
      params: { uid }
    }
  } = props;

  const provider = useContext(ProviderContext);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    provider
      .getProfile(uid)
      .then(setProfile)
      .catch(setError);
  }, [provider, uid]);

  return (
    <div>
      <h1>Profile Viewer</h1>
      {profile && (
        <>
          <p>{profile.displayName}</p>
          <p>{profile.description}</p>
        </>
      )}
      {!profile && <p>Nothing here.</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
}
