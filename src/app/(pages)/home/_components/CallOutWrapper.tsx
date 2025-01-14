'use client';

import React, { useState } from 'react';
import CallOut from './CallOut';
import { AnnouncementDataType } from '@/lib/notion/announcements';

export default function CallOutWrapper({ text }: { text: AnnouncementDataType }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(false);
  };

  const handleTransitionEnd = () => {
    if (!isVisible) {
      setIsRendered(false); // Unmount component when transition ends
    }
  };

  return isRendered ? (
    <div
      className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}
      onTransitionEnd={handleTransitionEnd}
    >
      {<CallOut text={text} toggleVisibility={toggleVisibility} />}
    </div>
  ) : null;
}
