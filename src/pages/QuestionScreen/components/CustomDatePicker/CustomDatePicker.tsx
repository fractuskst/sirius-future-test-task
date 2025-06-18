import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import styles from "./CustomDatePicker.module.scss";
import "react-day-picker/dist/style.css";

type Props = {
  selectedDate: Date | null;
  onDateOfBirthChange: (date: Date | null) => void;
};

const CustomDatePicker = ({ selectedDate, onDateOfBirthChange }: Props) => {
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(selectedDate ?? new Date());
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setCurrentMonth(date);
    }
    onDateOfBirthChange(date ?? null);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Дата рождения ребенка</label>

      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        value={selectedDate ? format(selectedDate, "dd.MM.yyyy") : ""}
        onClick={() => setOpen((prev) => !prev)}
        readOnly
        placeholder="28.07.1986"
      />

      {open && (
        <div className={styles.popover} ref={calendarRef}>
          <DayPicker
            captionLayout="dropdown-years"
            navLayout="around"
            required
            mode="single"
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            selected={selectedDate ?? undefined}
            onSelect={handleDateSelect}
            locale={ru}
            disabled={{ after: new Date() }}
            modifiersClassNames={{
              selected: styles.selectedDay,
              today: styles.today,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
