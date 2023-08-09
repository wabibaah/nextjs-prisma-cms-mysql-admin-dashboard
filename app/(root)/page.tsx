"use client";

import Modal from "@/components/ui/modal";

// export default function Home() {
//   return (
//     <div className="p-4">
//       <Button variant="ghost" size="default" >This is me please click me</Button>
//     </div>
//   );
// }

const setUpPage = () => {
  return (
    <div className="p-4">
      <Modal
        title="Test"
        description="testing description"
        isOpen
        onClose={() => {}}
      >
        Children
      </Modal>
    </div>
  );
};

export default setUpPage;
