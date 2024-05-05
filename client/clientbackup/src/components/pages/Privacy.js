import React from "react";

export const Privacy = () => {
  return (
    <div className="white-text container away-nav ">
      <h2> Apu-Keeper OAuth Service Privacy Policy </h2>
      <p>
        This document describes what information the Apu-keeper OAuth service
        collects, how it is used, how and where it is stored, whom it is shared
        with, and how you can remove the stored information.
      </p>

      <h4>How we use your data </h4>
      <p>
        The Apu-keeper OAuth service attempts to collect and store as little
        information as possible. When you connect to any of the supported OAuth
        providers, Apu-keeper obtains a long-term session key. This key,
        combined with a secret known only to the Apu-keeper OAuth service, can
        be exchanged for a short-term key, which can be used to access your
        account on the site that you have authenticated with.
      </p>

      <h4> How we store your data </h4>
      <p>
        To avoid transmitting the long-term session key, we store the long-term
        session key. To prevent unwanted access to your account, we encrypt the
        long-term session key with a password before we store it. This password
        is given to you in the form of an "AuthID" string. It is not possible to
        recover the long-term session key without this password, meaning it is
        only possible to intercept this key during a login (and shortly after,
        as the key is briefly kept in cache).
      </p>

      <h4>Where we store and handle your data </h4>
      <p>
        The data is stored on mongodb atlas,heroku App Engine and, using their
        scalable storage and server infrastructure.
      </p>

      <h4>Who we share your data with </h4>
      <p>
        As part of the login process, we send the long-term session token to the
        provider who issued it (after it has been decrypted with the
        client-provided key). The resulting short-term session key is sent
        directly to the requesting client, and not stored on the server.
      </p>
      <p>
        Apart from this exchange of secrets, we do not share your information
        with anyone. This is enforced since we do not store any information that
        we could share, except from the log data as described above. Please note
        that as the service is running on GAE and heroku server, Google,heroku
        will also have access to the log data.
      </p>
    </div>
  );
};
