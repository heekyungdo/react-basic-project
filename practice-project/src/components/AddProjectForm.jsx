import { useState, forwardRef,useRef } from "react";

const AddProjectForm = forwardRef(function AddProjectForm({ onSave }, refs) {

    const { title, description, date } = refs

    return (
        <div>
            <div>
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={onSave}>Save</button>
            </div>
            <form>
                <p className="flex flex-col">
                    <label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
                    <input
                        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                        type="text"
                        required
                        ref={title} />
                </p>
                <p className="flex flex-col">
                    <label className="text-sm font-bold uppercase text-stone-500">DESCRITION</label>
                    <input
                        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                        type="text"
                        required
                        ref={description} />
                </p>
                <p className="flex flex-col">
                    <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
                    <input
                        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                        type="date"
                        required
                        ref={date} />
                </p>
            </form>
        </div>
    )
});

export default AddProjectForm;