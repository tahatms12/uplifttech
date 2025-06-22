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
    // Make sure Cal.com script is loaded
    const loadCalScript = () => {
      if (!document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://app.cal.com/embed/embed.js';
        script.async = true;
        script.onload = initializeCalendar;
        document.head.appendChild(script);
      } else if (window.Cal) {
        initializeCalendar();
      }
    };

    // Initialize the calendar
    const initializeCalendar = () => {
      if (!window.Cal) return;
      
      // Initialize namespace if needed
      if (!window.Cal.ns || !window.Cal.ns[namespace]) {
        window.Cal("init", namespace, { origin: "https://cal.com" });
      }
      
      // Configure inline calendar
      window.Cal.ns[namespace]("inline", {
        elementOrSelector: `#${elementId}`,
        calLink: calLink,
        config: { layout }
      });

      // Configure UI options
      window.Cal.ns[namespace]("ui", {
        hideEventTypeDetails: hideEventTypeDetails,
        layout: layout
      });
    };

    // Load script and initialize
    loadCalScript();
    
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