"use client";
import { StoreModal } from "@/components/modals/store-modal";
import { useState, useEffect } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <StoreModal />
    </>
  );
};

// we will add this to our layout.tsx in the app folder
// layout.tsx is a server component so we can't just add a client component to it
// we have to ensure that there will be no hydration errors to it
// for eg. the server will not have any modal open but the client will
// so until this live cycle has run, (the use effect), null should be returned
// if our app is not mounted [] means that we are in server side , and we are not going to render any modal in server side
