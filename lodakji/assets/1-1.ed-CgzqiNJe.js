var e=`# 예시 스토리: 1-1 첫 클리어 뒤(ED). 자유롭게 고치거나 지워도 된다.
@bg lo_lobby
@show 3P_Labiata left name=라비아타
라비아타: 철충 무리를 모두 정리했어요. 수고하셨어요, 주인님.
@show PECS_Cerberus right
켈베로스: 헤헤, 저도 쾅 막아냈어요!
@choice
- 잘했어, 켈베로스 -> praise
- 다들 수고했어
라비아타: 다들 무사해서 다행이에요.
@end
:praise
@shake
켈베로스: 칭찬받았다! 다음에도 쾅 막아낼게요!
`;export{e as default};