import React, { useState, ChangeEvent } from "react";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { FormDataIO } from "../../typeIO/priliminaryIO";

const BookTuitionSlot: React.FC = () => {
  const [form, setForm] = useState<FormDataIO>({
    cardId: "",
    tutorName: "",
    timingSlab: "",
    lastDate: new Date(),
    urgent: false,
    phoneNumber: "",
    requirements: [""],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRequirementChange = (value: string, index: number): void => {
    const newReq = [...form.requirements];
    newReq[index] = value;
    setForm((prev) => ({ ...prev, requirements: newReq }));
  };

  const addRequirement = (): void => {
    setForm((prev) => ({
      ...prev,
      requirements: [...prev.requirements, ""],
    }));
  };

  const removeRequirement = (index: number): void => {
    const newReq = form.requirements.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, requirements: newReq }));
  };

  const handleDateChange = (date: Date): void => {
    setForm((prev) => ({ ...prev, lastDate: date }));
  };

  const handleSubmit = (): void => {
    const finalData = {
      ...form,
      lastDate: format(form.lastDate, "dd MMMM yyyy"),
    };
    console.log("Data to Save:", finalData);
    // send finalData to your backend (e.g. via fetch or axios)
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-100 shadow-xl rounded-box mt-10">
      <h2 className="text-3xl font-bold text-center mb-16 shadow-xs">📚 Book a Tuition Slot</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">Card ID</label>
          <input
            type="text"
            name="cardId"
            value={form.cardId}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">Tutor Name</label>
          <input
            type="text"
            name="tutorName"
            value={form.tutorName}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">Timing Slab</label>
          <input
            type="text"
            name="timingSlab"
            value={form.timingSlab}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">Last Date</label>
          <input
            type="date"
            className="input input-bordered"
            value={format(form.lastDate, "yyyy-MM-dd")}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          />
        </div>

        <div className="form-control flex justify-center items-center mt-8 gap-6" >
          <label className="label">Urgent</label>
          <input
            type="checkbox"
            name="urgent"
            checked={form.urgent}
            onChange={handleInputChange}
            className="toggle toggle-error"
          />
        </div>
      </div>

      <div className="form-control mt-6">
        <label className="label font-semibold">Requirements</label>
        {form.requirements.map((req: string, index: number) => (
          <div key={index} className="flex gap-6 mb-2 justify-center items-center">
            <input
              type="text"
              value={req}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleRequirementChange(e.target.value, index)}
              className="input input-bordered w-full"
            />
            {form.requirements.length > 1 && (
              <button
                type="button"
                className="btn btn-sm btn-error tooltip"
                data-tip="Remove"
                onClick={() => removeRequirement(index)}
              >
                <Trash2 className="h-4 w-4 text-white" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="btn btn-outline btn-accent btn-sm mt-2 w-fit"
          onClick={addRequirement}
        >
          ✚ Add Requirement
        </button>
      </div>

      <div className="form-control mt-8">
        <button onClick={handleSubmit} className="btn btn-primary">
          Save Tuition Slot
        </button>
      </div>
    </div>
  );
};

export default BookTuitionSlot;
