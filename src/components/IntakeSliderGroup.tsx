"use client";

interface SliderGroupProps {
  sectionId: string;
  sectionNumber: string;
  sectionTitle: string;
  statements: string[];
  values: Record<string, number>;
  onChange: (key: string, value: number) => void;
}

export default function IntakeSliderGroup({
  sectionId,
  sectionNumber,
  sectionTitle,
  statements,
  values,
  onChange,
}: SliderGroupProps) {
  const sectionAvg = Math.round(
    statements.reduce((sum, _, i) => sum + (values[`${sectionId}_${i}`] ?? 50), 0) /
      statements.length
  );

  return (
    <div className="intake-slider-group">
      <div className="intake-slider-header">
        <h3>
          <span className="intake-section-num">{sectionNumber}</span>
          {sectionTitle}
        </h3>
        <div className="intake-section-score">
          <span className="intake-score-value">{sectionAvg}</span>
          <span className="intake-score-label">/ 100</span>
        </div>
      </div>
      {statements.map((statement, i) => {
        const key = `${sectionId}_${i}`;
        const val = values[key] ?? 50;
        return (
          <div className="intake-slider-row" key={i}>
            <p className="intake-slider-statement">{statement}</p>
            <div className="intake-slider-control">
              <input
                type="range"
                min={0}
                max={100}
                value={val}
                onChange={(e) => onChange(key, parseInt(e.target.value))}
                className="intake-slider"
                aria-label={statement}
                style={{ "--slider-val": `${val}%` } as React.CSSProperties}
              />
              <span className="intake-slider-value">{val}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
