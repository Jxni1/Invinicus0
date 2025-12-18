"use client";

import React, { useState, useRef } from "react";
import incon from "../../../public/images/incon.svg";
import Image from "next/image";
import upload from "../../../public/images/upload.svg";

// ✅ Define FileUploadArea OUTSIDE the main component
const FileUploadArea = ({
  type,
  label,
  dragActive,
  files,
  fileInputRefs,
  handleDrag,
  handleDrop,
  handleFileChange,
}) => (
  <div className="mb-6">
    <label className="block text-sm font-light text-gray-600 mb-2">
      {label}
    </label>
    <div
      className={`border-2 border-dashed rounded-lg p-30 text-center transition-colors ${
        dragActive[type]
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 bg-white"
      }`}
      onDragEnter={(e) => handleDrag(e, type, true)}
      onDragLeave={(e) => handleDrag(e, type, false)}
      onDragOver={(e) => handleDrag(e, type, true)}
      onDrop={(e) => handleDrop(e, type)}
    >
      <div className="mb-4 items-center justify-center flex">
        <Image src={upload} alt="Upload Icon" />
      </div>
      <p className="text-gray-700 mb-1">
        Wählen Sie eine Datei aus oder ziehen Sie sie per Drag & Drop hierher.
      </p>
      <p className="text-gray-400 text-sm mb-4">
        JPEG, PNG, PDG-Formate, bis zu 50 MB
      </p>
      {files[type] && (
        <p className="text-green-600 text-sm mb-3">✓ {files[type]?.name}</p>
      )}
      <input
        ref={fileInputRefs[type]}
        type="file"
        className="hidden"
        accept=".jpg,.jpeg,.png,.pdf,.mp4"
        onChange={(e) => handleFileChange(e, type)}
      />
      <button
        type="button"
        onClick={() => fileInputRefs[type].current?.click()}
        className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-sm"
      >
        Hochladen
      </button>
    </div>
  </div>
);

export default function BewerbungsFormular1() {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
  });

  const [files, setFiles] = useState({
    lebenslauf: null,
    motivationsschreiben: null,
    andereDateien: null,
  });

  const [dragActive, setDragActive] = useState({
    lebenslauf: false,
    motivationsschreiben: false,
    andereDateien: false,
  });

  const lebenslaufRef = useRef(null);
  const motivationsschreibenRef = useRef(null);
  const andereDateienRef = useRef(null);

  const fileInputRefs = {
    lebenslauf: lebenslaufRef,
    motivationsschreiben: motivationsschreibenRef,
    andereDateien: andereDateienRef,
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDrag = (e, type, active) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive({ ...dragActive, [type]: active });
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive({ ...dragActive, [type]: false });

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setFiles({ ...files, [type]: file });
      }
    }
  };

  const handleFileChange = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setFiles({ ...files, [type]: file });
      }
    }
  };

  const validateFile = (file) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
      "video/mp4",
    ];
    const maxSize = 50 * 1024 * 1024; // 50MB

    if (!allowedTypes.includes(file.type)) {
      alert("Nur JPEG, PNG, PDF und MP4 Formate sind erlaubt");
      return false;
    }

    if (file.size > maxSize) {
      alert("Datei darf nicht größer als 50MB sein");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.vorname || !formData.nachname || !formData.email) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus");
      return;
    }

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        submitData.append(key, file);
      }
    });

    console.log("Form submitted:", { formData, files });
    alert("Bewerbung erfolgreich eingereicht!");
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-5 md:px-0">
      <h2 className="text-[24px] md:text-[32px] text-[#011222]">
        Wir zeigen dir den Weg zu deiner Entwicklung
      </h2>
      <p className="text-[#5B6B7A] text-[16px] md:text-[20px] py-10">
        Unser Bewerbungsprozess bei Invinicus ist unkompliziert, transparent und
        fair. Bewirb dich online. Wir prüfen deine Unterlagen zeitnah, geben dir
        schneller Feedback und laden dich zu eventuell kurzen Kennenlernterminen
        ein – persönlich oder per Video. Freue dich auf eine klare Kommunikation
        und eine transparente Entscheidungsphase.
      </p>
      <h2 className="text-[32px] md:text-[40px] font-normal mb-8 text-[#011222]">
        Bewerbungsformular
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Vorname
            </label>
            <input
              type="text"
              name="vorname"
              value={formData.vorname}
              onChange={handleInputChange}
              placeholder="Vorname"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Nachname
            </label>
            <input
              type="text"
              name="nachname"
              value={formData.nachname}
              onChange={handleInputChange}
              placeholder="Nachname"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-Mail"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Telefon Nummer
            </label>
            <input
              type="tel"
              name="telefon"
              value={formData.telefon}
              onChange={handleInputChange}
              placeholder="Telefon"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <FileUploadArea
          type="lebenslauf"
          label="Hochladen: Lebenslauf"
          dragActive={dragActive}
          files={files}
          fileInputRefs={fileInputRefs}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          handleFileChange={handleFileChange}
        />
        <FileUploadArea
          type="motivationsschreiben"
          label="Hochladen: Motivationsschreiben"
          dragActive={dragActive}
          files={files}
          fileInputRefs={fileInputRefs}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          handleFileChange={handleFileChange}
        />
        <FileUploadArea
          type="andereDateien"
          label="Hochladen: Andere Dateien (Zertifikate, Arbeitszeugnisse Usw.)"
          dragActive={dragActive}
          files={files}
          fileInputRefs={fileInputRefs}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          handleFileChange={handleFileChange}
        />

        <button className="flex flex-row items-center justify-start gap-3 bg-[#0069D1] px-5 py-3 rounded-full mt-10">
          <h1 className="text-white uppercase">EINREICHEN</h1>
          <Image src={incon} alt="arrow1" />
        </button>
      </form>
    </div>
  );
}
