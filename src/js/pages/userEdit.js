/*
  user/edit.php
  dnd.css
  dnd.js
*/

import sortable from '#/modules/Sortable'

sortable({
  onDragEnd: () => {
    const items = Array.from(document.querySelectorAll('.u-sortable-item')).map(
      (element) => element.textContent.trim()
    )
    document.querySelector('#SettingTorrentTitleInput').value = items.join(',')
  },
})

globalapp.userEditSettingTorrentTitleReset =
  function userEditSettingTorrentTitleReset() {
    document.querySelector('#SettingTorrentTitleInput').value = ''
  }