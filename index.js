// Select all video sections
const videoSections = document.querySelectorAll(".video-section");

videoSections.forEach((section) => {
  // LIKE BUTTON
  const likeBtn = section.querySelector(".action.like");
  const likeIcon = likeBtn?.querySelector("img");
  const likeCount = likeBtn?.querySelector("span");
  let liked = false;

  likeBtn?.addEventListener("click", () => {
    liked = !liked;
    likeIcon.src = liked
      ? "https://img.icons8.com/ios-filled/50/fa314a/like--v1.png"
      : "https://img.icons8.com/ios-filled/50/ffffff/like--v1.png";

    likeCount.textContent = liked ? "120.8K" : "120.7K";
  });

  // SAVE BUTTON
  const saveBtn = section.querySelector(".action.save");
  const saveIcon = saveBtn?.querySelector("img");
  const saveLabel = saveBtn?.querySelector("span");
  let saved = false;

  saveBtn?.addEventListener("click", () => {
    saved = !saved;
    saveIcon.src = saved
      ? "https://img.icons8.com/ios-filled/50/00ffcc/bookmark-ribbon--v1.png"
      : "https://img.icons8.com/ios-filled/50/ffffff/bookmark-ribbon--v1.png";

    saveLabel.textContent = saved ? "Saved" : "Save";
  });

  // SHARE BUTTON
  const shareBtn = section.querySelector(".action.share");

  shareBtn?.addEventListener("click", () => {
    const videoURL = window.location.href;
    navigator.clipboard.writeText(videoURL).then(() => {
      alert("Link copied to clipboard!");
    });
  });

  // COMMENT BUTTON
  const commentBtn = section.querySelector(".action.comment");

  commentBtn?.addEventListener("click", () => {
    alert("Comment feature coming soon 👀");
  });
});

