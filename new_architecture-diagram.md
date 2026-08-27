                    ┌──────────────────────┐
                    │      Vercel          │
                    │   Next.js Website    │
                    └──────────┬───────────┘
                               │
                               │ MONGODB_URI
                               ▼
                    ┌──────────────────────┐
                    │    MongoDB Atlas     │
                    │                      │
                    │   🇺🇸 AWS US Region   │
                    │                      │
                    │ ┌──────────────────┐ │
                    │ │ news             │ │
                    │ │ gallery          │ │
                    │ │ admins           │ │
                    │ │ etc.             │ │
                    │ └──────────────────┘ │
                    └──────────────────────┘

                               ▲
                               │ image URLs
                               │
                    ┌──────────────────────┐
                    │      Cloudinary      │
                    │                      │
                    │ Actual images/files  │
                    └──────────────────────┘