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





                  NEWSong Church

                         │
                         ▼
                 Next.js Application
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
          MongoDB Atlas          Cloudinary
        AWS N. Virginia          Media storage
          us-east-1
              │                     │
              ▼                     ▼
       News / Gallery          Images/videos
       Admin / metadata        already stored