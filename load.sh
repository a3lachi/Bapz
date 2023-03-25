
rrr() { git add . ; git commit -m "code update"$1 ; git push ;}

i="1"

while [ $i -lt 20 ]
do
rrr $i;
sleep 120;
i=$[$i+1]
done