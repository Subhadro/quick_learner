import React, { useState } from "react";
import ToggleButton from "../../reusable-parts/ToggleButton";
import TitleComponent from "../../reusable-parts/TitleComponent";
import { teachingHistoryData } from "../../Constants/tution-history";
import PendingRequestCard from "../../reusable-parts/PendingRequestCardFromStudent";
import { PendingRequestIO } from "../../typeIO/priliminaryIO";

const PendingRequestsList: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [pendingRequests] = useState<PendingRequestIO[]>(teachingHistoryData);

  const visibleRequests = showAll ? pendingRequests : pendingRequests.slice(0, 2);

  return (
    <div className="min-h-screen my-12 px-4">
      <TitleComponent
        title="Pending Class Requests"
        size="4xl"
        align="left"
        className="text-white"
      />

      <div className="grid gap-6">
        {visibleRequests.map((request) => (
          <PendingRequestCard key={request.cardId} request={request} />
        ))}
      </div>

      {pendingRequests.length > 2 && (
        <ToggleButton
          onClick={() => setShowAll((prev) => !prev)}
          isExpanded={showAll}
          expandedText="Show Less"
          collapsedText="Show More"
        />
      )}
    </div>
  );
};

export default PendingRequestsList;
