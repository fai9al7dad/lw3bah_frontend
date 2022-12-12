import React, { useState } from "react";
import { SecondaryButton } from "./atoms";

export default function Modal({
  trigger,
  children,
  title,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {/* trigger */}
      <div onClick={toggleModal}>{trigger}</div>
      {/* overlay */}

      {showModal == true && (
        <div
          onClick={() => setShowModal(!showModal)}
          className="bg-neutral-900/40 w-screen h-screen z-50 fixed inset-0"
        />
      )}
      {showModal == true && (
        <div
          className={`relative z-50 ease-out duration-150 `}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-40 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-14 sm:py-9">
                  <div className="flex items-center justify-between mb-5">
                    {/* back button */}
                    <SecondaryButton
                      className="flex  text-primary-text "
                      onClick={toggleModal}
                    >
                      عودة
                    </SecondaryButton>
                    {title && (
                      <div className="text-center text-2xl font-bold">
                        {title}
                      </div>
                    )}
                    <div className="px-10"></div>
                  </div>

                  {/* pass setShowModal to children to close the modal */}
                  {React.cloneElement(children as React.ReactElement, {
                    setShowModal,
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
