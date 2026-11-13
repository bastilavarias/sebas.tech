# Add music files for Baste Links

The site is already wired for **static MP3 playback on Netlify**. The player supports play/pause, next/previous, seeking, and the mobile album picker. **No recordings are included in this repository.** Add only files that you're authorized to host publicly.

## Where to upload

Copy your audio files to the matching folder inside the repository:

```text
public/
  music/
    apoc-loob-ng-kabaong/
      Loob Ng Kabaong.mp3
      Piyesa Ng Makina.mp3
      ...
    mhot-panalo-kasa/
      Kasa.mp3
      Salang.mp3
      ...
    kolateral-kolateral/
      Makinarya (feat. BLKD, Calix).mp3
      ...
```

The three empty directories are already committed. The reference track titles, durations, and original filenames are in:

- `src/data/music-manifests/apoc-loob-ng-kabaong.json`
- `src/data/music-manifests/mhot-panalo-kasa.json`
- `src/data/music-manifests/kolateral-kolateral.json`

**Use the filename shown in the manifest** whenever possible. Alternatively, names starting with the track number (such as `01 - Kasa.mp3`) or matching the song title are recognized. Filename capitalization and spelling matter on Netlify's Linux filesystem when using the exact filename. Supported formats: MP3, M4A, AAC, FLAC, WAV, and OGG. MP3 offers broad browser compatibility.

## Publish changes

1. Add authorized music files under the folders above in your local Git checkout (or through GitHub's file upload interface).
2. Commit and push them to `master`.
3. Netlify automatically rebuilds on a GitHub push. Its build script scans **only the files physically present** under `public/music/` and generates `public/music/library.json` automatically.
4. After the Netlify deployment finishes, refresh [sebastechisme.netlify.app](https://sebastechisme.netlify.app/) and select a vinyl. The player plays the first available track and skips missing ones.

No hand editing of `library.json`, Nginx directory listing, or custom server setup is required. The generated index is deliberately Git-ignored and rebuilt on every deployment. Files absent from the deployment remain silent previews instead of producing broken audio URLs.

### Verify before pushing

```bash
npm ci
npm run build
```

The build log prints the discovered playable count for each album. For example, `Panalo Kasa: 2/8 playable tracks` means two audio files were recognized.

**Note on public files:** Anything committed under `public/music/` can be downloaded directly by any visitor with its URL. Upload only recordings for which you have the necessary public streaming/distribution permission. Files larger than GitHub's individual file size limit need separate authorized hosting.
