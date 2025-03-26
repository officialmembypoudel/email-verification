"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, FileSpreadsheet, FileJson } from "lucide-react"

export function BulkValidator() {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      handleFile(file)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      handleFile(file)
    }
  }

  const handleFile = (file: File) => {
    // Check if file is CSV, JSON, or Excel
    const validTypes = [
      "text/csv",
      "application/json",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // xlsx
      "application/vnd.ms-excel", // xls
    ]

    if (validTypes.includes(file.type)) {
      setSelectedFile(file)
    } else {
      alert("Please upload a CSV, JSON, or Excel file")
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    // In a real implementation, you would:
    // 1. Create a FormData object
    // 2. Append the file
    // 3. Send to a server action for processing
    // 4. Display results

    alert(`Processing ${selectedFile.name}. In a real implementation, this would be sent to the server for validation.`)
  }

  return (
    <div className="flex flex-col space-y-4 pt-4">
      <div className="grid gap-4">
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
            isDragging ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept=".csv,.json,.xlsx,.xls"
            onChange={handleFileInput}
          />
          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm font-medium mb-1">
            {selectedFile ? selectedFile.name : "Drag and drop your file here"}
          </p>
          <p className="text-xs text-muted-foreground mb-3">
            {selectedFile ? `${(selectedFile.size / 1024).toFixed(2)} KB` : "Supports CSV, JSON, and Excel files"}
          </p>
          <div className="flex justify-center gap-2">
            <div className="flex items-center text-xs bg-muted px-2 py-1 rounded">
              <FileSpreadsheet className="h-3 w-3 mr-1" />
              CSV
            </div>
            <div className="flex items-center text-xs bg-muted px-2 py-1 rounded">
              <FileJson className="h-3 w-3 mr-1" />
              JSON
            </div>
            <div className="flex items-center text-xs bg-muted px-2 py-1 rounded">
              <FileSpreadsheet className="h-3 w-3 mr-1" />
              Excel
            </div>
          </div>
        </div>
        <Button onClick={handleUpload} disabled={!selectedFile}>
          {selectedFile ? "Upload & Verify" : "Select a File"}
        </Button>
      </div>
    </div>
  )
}

