"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type GalleryCategory =
  | "church"
  | "missions"
  | "community";

interface RecoveryImage {
  publicId: string;
  secureUrl: string;
  format: string;
  width: number;
  height: number;
  createdAt: string;
}

const CATEGORIES: {
  value: GalleryCategory;
  label: string;
}[] = [
  {
    value: "church",
    label: "Church",
  },
  {
    value: "missions",
    label: "Missions",
  },
  {
    value: "community",
    label: "Community",
  },
];

export default function GalleryRecoveryPage() {
  const [images, setImages] = useState<RecoveryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [processingId, setProcessingId] = useState<string | null>(
    null
  );

  const [classified, setClassified] = useState<
    Record<string, GalleryCategory>
  >({});

  async function fetchImages() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "/api/admin/gallery-recovery"
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to load gallery images."
        );
      }

      setImages(data.resources || []);
    } catch (err: any) {
      console.error(err);

      setError(
        err.message || "Failed to load gallery images."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  async function classifyImage(
    image: RecoveryImage,
    category: GalleryCategory
  ) {
    try {
      setProcessingId(image.publicId);

      const response = await fetch(
        "/api/admin/gallery-recovery/classify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Gallery Image",
            category,
            imageUrl: image.secureUrl,
            publicId: image.publicId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to classify image."
        );
      }

      // Mark the image as classified.
      setClassified((previous) => ({
        ...previous,
        [image.publicId]: category,
      }));

      // Remove it from the active recovery list.
      setImages((previous) =>
        previous.filter(
          (item) => item.publicId !== image.publicId
        )
      );
    } catch (err: any) {
      console.error(err);

      alert(
        err.message || "Failed to classify this image."
      );
    } finally {
      setProcessingId(null);
    }
  }

  const remaining = images.length;

  const totalClassified = useMemo(
    () => Object.keys(classified).length,
    [classified]
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold">
            Gallery Recovery
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Loading images from Cloudinary...
          </p>
        </div>

        <div className="rounded-2xl border p-8">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold">
            Gallery Recovery
          </h1>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
          <p className="font-medium">
            Failed to load images
          </p>

          <p className="mt-2 text-sm">
            {error}
          </p>

          <button
            onClick={fetchImages}
            className="mt-4 rounded-lg bg-black px-4 py-2 text-sm text-white"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Gallery Recovery
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            These images were recovered from Cloudinary.
            Classify each image to add it to the new gallery
            database.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="rounded-xl border px-4 py-3">
            <p className="text-xs text-muted-foreground">
              Remaining
            </p>

            <p className="text-xl font-semibold">
              {remaining}
            </p>
          </div>

          <div className="rounded-xl border px-4 py-3">
            <p className="text-xs text-muted-foreground">
              Classified this session
            </p>

            <p className="text-xl font-semibold">
              {totalClassified}
            </p>
          </div>
        </div>
      </div>

      {/* Finished */}
      {images.length === 0 ? (
        <div className="rounded-2xl border p-12 text-center">
          <h2 className="text-2xl font-semibold">
            🎉 Recovery complete
          </h2>

          <p className="mt-3 text-muted-foreground">
            All Cloudinary gallery images have been
            classified and added to MongoDB.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => {
            const isProcessing =
              processingId === image.publicId;

            return (
              <div
                key={image.publicId}
                className="overflow-hidden rounded-2xl border bg-background"
              >
                {/* Image */}
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={image.secureUrl}
                    alt="Recovered gallery image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Information */}
                <div className="space-y-4 p-5">
                  <div>
                    <p className="text-sm font-medium">
                      Cloudinary Asset
                    </p>

                    <p className="mt-1 break-all text-xs text-muted-foreground">
                      {image.publicId}
                    </p>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {image.width} × {image.height}
                  </div>

                  {/* Classification */}
                  <div>
                    <p className="mb-2 text-sm font-medium">
                      Classify this image
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      {CATEGORIES.map((category) => (
                        <button
                          key={category.value}
                          disabled={isProcessing}
                          onClick={() =>
                            classifyImage(
                              image,
                              category.value
                            )
                          }
                          className="rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {isProcessing
                            ? "Saving..."
                            : category.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}