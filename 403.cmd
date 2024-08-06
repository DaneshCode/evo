
netsh interface ip set dns name="Wi-Fi" static 10.202.10.202
netsh interface ip add dns name="Wi-Fi" 10.202.10.102 index=2

echo DNS servers updated.
