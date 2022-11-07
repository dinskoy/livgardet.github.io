let krita = document.getElementById('krita');

krita.addEventListener("click", open_krita); 
function open_krita(){
	krita.style.display = 'flex';
	krita.style.backgroundColor = "dimgray";
	krita.innerHTML = krita.innerHTML + `
					<div class="block_download">
						<br>
						<span class="caption_download">Krita</span>
						<img style="margin: 5px;" height="60px" width="60px" src="svg/krita.svg" alt="krita logo">
						<div>
							<img style="margin-top: px;" height="20px" width="20px" src="svg/windows.svg" alt="windows logo">
							<span style="font-size: 10px; color: dimgray;">Windows</span>
						</div>
						<a class="link_download" href="https://download.kde.org/stable/krita/5.1.1/krita-x64-5.1.1-setup.exe" download>	
							<div>
								Download
							</div>
						</a>
					</div>
					<div class="block_download">
						<br>
						<span class="caption_download">Krita</span>
						<img style="margin: 5px;" height="60px" width="60px" src="svg/krita.svg" alt="krita logo">
						<div>
							<img style="margin-top: px;" height="20px" width="20px" src="svg/mac-os.svg" alt="mac os logo">
							<span style="font-size: 10px; color: dimgray;">Mac OS</span>
						</div>
						<a class="link_download" href="https://download.kde.org/stable/krita/5.1.1/krita-5.1.1.dmg" download>	
							<div>
								Download
							</div>
						</a>
					</div>`;
	krita.removeEventListener("click", open_krita);
	krita.addEventListener("click", close_krita)
};
function close_krita(){
	krita.style.display = 'block';
	krita.style.backgroundColor = 'black'
	krita.innerHTML = `<div class="block_download">
						<!--krita-->
						<br>
						<span class="caption_download">Krita</span>
						<img style="margin: 5px;" height="60px" width="60px" src="svg/krita.svg" alt="krita logo">
						<div>
							<img style="margin-top: px;" height="20px" width="20px" src="svg/linux.svg" alt="linux logo">
							<span style="font-size: 10px; color: dimgray;">Linux</span>
						</div>
						<a class="link_download" href="https://download.kde.org/stable/krita/5.1.1/krita-5.1.1-x86_64.appimage" download>	
							<div>
								Download
							</div>
						</a>
					</div>`;
	krita.removeEventListener("click", close_krita);
	krita.addEventListener("click", open_krita)
};