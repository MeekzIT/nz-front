'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './TooltipPolygon.module.scss';

interface TooltipPolygonProps {
  id: number;
  coordinates: string;
  in_stock: boolean;
  room_count: string;
  square_meter: string;
}

const TooltipPolygon: React.FC<TooltipPolygonProps> = ({
  id,
  coordinates,
  in_stock,
  room_count,
  square_meter,
}) => {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    content: string;
  }>({
    visible: false,
    x: 0,
    y: 0,
    content: '',
  });

  const handleMouseEnter = (e: React.MouseEvent<SVGPolygonElement>) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY - 10,
      content: `${room_count} Ննջասենյակ, Մակերես ${square_meter} м²`,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGPolygonElement>) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY - 10,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, content: '' });
  };

  return (
    <>
      <polygon
        points={coordinates}
        className={`${styles.hoverEffect} ${!in_stock ? styles.inStock : styles.outOfStock}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      {tooltip.visible &&
        createPortal(
          <div
            className={styles.tooltip}
            style={{
              top: tooltip.y,
              left: tooltip.x,
            }}
          >
            {tooltip.content}
          </div>,
          document.body,
        )}
    </>
  );
};

export default TooltipPolygon;
