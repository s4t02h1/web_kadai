
// exec1�FCSS�̃X�^�C����ύX���Ă݂悤
$(function () {
	$("div").css("background-color", "green");
});
// exec2�F�^�C�~���O���R���g���[�����Ă݂悤
// on()���\�b�h�͓���̏o�����i�C�x���g�j���N����^�C�~���O�Ɏ��s���������߁i�C�x���g�n���h���j��ݒ肷�郁�\�b�h
// �C�x���g�̎�ނ��C�x���g�^�C�v�Ƃ���
$(function () {
	$("div").on('mouseover', function(){
		$("div").css("background-color", "#FC6");
	});

	$("div").on('mouseout', function(){
//		$("div").css("background-color", "green");
//		$("div").css('background-color', ''); //''�͌��ɖ߂�
		$("div").css({
			color: '',
			backgroundColor: ''
		});
		
	});
});
// ���\�b�h�`�F�[�����g���Ă݂�
// �v���O�����̏������x���オ��
$(function () {
	$("div")
		.on('mouseover', function(){
			$("div").css("background-color", "#FC6");
		})
		.on('mouseout', function(){
			$("div").css("background-color", "#09C");
		});
});

// exec3�F�A�j���[�V���������Ă݂悤
// 1500�~���b�����ăA�j���[�V��������
$(function () {
	$("div").on('click', function(){
		$("div").animate({
			opacity: 0,	// 0����
			fontSize: '0px'	// ���X��0px�ɂȂ�
		  }, 1500
		);
	});
});
