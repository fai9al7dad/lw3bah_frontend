import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, use, useState } from "react";
import { SecondaryButton } from "./atoms";

export default function Modal({
  trigger,
  children,
  disableTrigger,
  showOverlay = true,
  onClick,
  viewModal = false,
  title,
}: {
  trigger?: React.ReactNode;
  disableTrigger?: boolean;
  children: React.ReactNode;
  showOverlay?: boolean;
  onClick?: () => void;
  viewModal?: boolean;

  title?: string;
}) {
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    setShowModal(viewModal);
  }, [viewModal]);

  const toggleModal = () => {
    if (onClick) onClick();
    if (disableTrigger) return;
    setShowModal(!showModal);
    viewModal = !viewModal;
  };
  return (
    <>
      {/* trigger */}
      <div onClick={toggleModal}>{trigger}</div>
      {/* overlay */}

      <Transition show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div onClick={toggleModal} className="fixed inset-0 bg-black/30" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm rounded-lg bg-white px-5 z-50 py-4">
                {/* back button */}
                <SecondaryButton
                  className="flex  text-primary-text text-sm
                   mb-5"
                  onClick={toggleModal}
                >
                  عودة
                </SecondaryButton>
                {title && (
                  <div className="text-center text-2xl font-bold">{title}</div>
                )}
                <div className="px-10"></div>
                {/* pass setShowModal to children to close the modal */}
                {React.cloneElement(children as React.ReactElement, {
                  setShowModal,
                })}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
