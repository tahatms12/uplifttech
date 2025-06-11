import React, { useEffect } from 'react';

interface CalEmbedProps {
  elementId: string;
  calLink: string;
  namespace?: string;
  layout?: 'month_view' | 'week_view' | 'day_view';
  hideEventTypeDetails?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    Cal?: any;
  }
}

const CalEmbed: React.FC<CalEmbedProps> = ({
  elementId,
  calLink,
  namespace = '30min',
  layout = 'week_view',
  hideEventTypeDetails = false,
  className = '',
  style = {}
}) => {
  useEffect(() => {
    // Initialize Cal if it's not already loaded
    if (window.Cal) {
      // If Cal is already initialized, use it directly
      if (window.Cal.ns && window.Cal.ns[namespace]) {
        window.Cal.ns[namespace]("inline", {
          elementOrSelector: `#${elementId}`,
          calLink: calLink,
          config: { layout }
        });

        window.Cal.ns[namespace]("ui", {
          hideEventTypeDetails: hideEventTypeDetails,
          layout: layout
        });
      } else {
        // Initialize namespace if it doesn't exist
        window.Cal("init", namespace, { origin: "https://cal.com" });
        
        window.Cal.ns[namespace]("inline", {
          elementOrSelector: `#${elementId}`,
          calLink: calLink,
          config: { layout }
        });

        window.Cal.ns[namespace]("ui", {
          hideEventTypeDetails: hideEventTypeDetails,
          layout: layout
        });
      }
    }
    
    // Cleanup function
    return () => {
      // Cal doesn't provide a direct way to clean up, but we could
      // potentially remove the element content if needed
    };
  }, [elementId, calLink, namespace, layout, hideEventTypeDetails]);

  return (
    <div 
      id={elementId} 
      className={className}
      style={{
        width: '100%',
        height: '700px',
        overflow: 'hidden',
        borderRadius: '0.75rem',
        ...style
      }}
    />
  );
};

export default CalEmbed;