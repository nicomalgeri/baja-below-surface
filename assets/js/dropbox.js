(function(){
  const DROPBOX_LINKS = [
    "https://previews.dropbox.com/p/thumb/ACv1_aODAobqkIQmdqCfY4d7T53ROMbv2AM-oZyC-mF-pRm3iuASKaiB3Alza7Wt_-hClVb3RHmqY3y3OuNBt-zc_3X8MG4426UnMybfo4XC1JbkEc9RjaTWr22EAitrxeouF9jNbiVuVnZNVIqsa_hI4xaRasAxVTUrh3UzwrharzonxDGpxoWlLK_rlkEfnglDNA93TJ2u6ZK5fGBbz74ILfQttEMi4pS9fe7Pe3kvM9AdMN7OpByLJZ3lh1SaVgBnlE3-zzr3CEXq8VMzo-wyopHZBUfO-pkXS3hEXd89RH1mGUHU4U9GtPOPr6KMhRs/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACsTewZSsES4FsAt1aVBMDvkarZt68B_Uz1Z1NicpYi0EXJzwGb4jmoxCNr4vRezMp68nkrFNuVJ5dTuvGcA8wKYPFLNGfM-W6wds38uf-zvWQyE4xwPUf0IubhJTteuqXf9iqj_b-7LtTft8kfhZAbcXQsQ9_JqlM7lmlYVyhFTDhNFYN-GH-MV1RO4T8CjdzdL1ViO66ixsTZgD8wzxN_YHOxSsLPWF9ZycmxJoI5H25edHgFi2gtzeFP5_LpfJ3X2Taj4xPHl0JuXrMJxa678ohk_zE0_ihpPguU8udpMXHaQobKUHMR1BAOxOHE52CA/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACsTiqppuCoqwO3uD3Te0ZEPbkm5ZZYP3vZ73eZGFAG_r9K8LWSB17lW9bKG0hoevOg-j8dZVOQk0SnWzLvAsu7__VafmvncxBQm7vre7yYZo7waWsnhxQ32PwFYoj8n9NPbALBK-jz75Dl-VmeMdihFYnfkbKV2pUdmxLNvjKob_ihmdDqf0JE_vO6hS1ObqOxGzi85f_S6hVW4pKkHvCgdqnUo_MilIygI2wVc-az9BfJzs0M2lC07Q2s2C13v27VLhqd87OTi8LioAmrJXoxxlG98OxEkNgg2gH7LuHpL20ANoevSSpsRvnCYvbNbg0o/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACvwrQhMplfhdLtDsXtHnDtyxLp5IrlTGjXnoRzgnTXxWVngF9CS5N-Oe-I2ExW3YBVZz8dI3YThGEje1ac5om4K8AvyQtZa6JONWE4bGAv2FRDUvaEouQvXnUyfz0O_5VtklmZ82lPHOyz_BJf0gvjFV_f_MNhAFOyxqUiB63XrTAB462xesSzV-2sYaM0nhRMSQcCKRpYQAum3oDyMPhdAZfAFG5RnJhM3I2ql-jJ9OoHumC_yO58MqbCBHgpJNsRJWKaWI9jNwOJBJiEXJs7OtFv0RMsr9kl59gv8hs3n0mbEWBbNldjSzgGLU1dxTEk/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACu8jrpwBRW9uCqIU9ywrcSzfUUrlg05tPA9oqxEEAsncMGduonUK3z2h_8kl8hl4MzEeR8wkgy2o6r58kNO2dgTot2uOLpCqMBDSmJWcgVPaoFfNSZADCvYv1w4a-N04KYe9bHQ2czlvAfFb1B4DcmdAjn40otalmreLnVe4E0blBnD80l5z4DZFwNNRIKApP4CTzUEWClQcfu3xnqYcudG0cO2INJWLiRSJvVBa2uOYlNc9WRoqBDUPb2h53-wYYCMOg8aHhqMmgdZONEFi47h_TE8mzn_BXIpTuXefsxe7jDFpzUbJkS3hXMNOUQ7E24/p.png",
    "https://previews.dropbox.com/p/thumb/ACu4DUKvr28GavPM6MvBQTXGsPaEKq6M3ZJb0rIPQyOYI-0ISeWEmh7cnj1CP-QoDSV7mzIEp4bU7f221-F39GgbLTH_zPMeRLw64-XCDcrMvLauPxgxNC1vO8iR2768ewVcEW6OF0pPlTEvRmSrES7uW8_U6UT46_eFJxFpXpy19q3BG0OVUUZqB0Vix8quQamuYhWJHrux51hz5940zcSrwChpoRkfw4-KLRQIJoYdohqfoqyLJHxEjctkO2kPNegSpndoACMP-7BmwxTHAJtaTZbS2SJCwhoY9LrTj4QcJB7w2r343fVFP9SqzAQ0rBo/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACshGZ6nsSw_in-WFMw9ApUYHwtkBsEY-ax6vTqvVYxSVV_3AVQ6RRJLbLzbhXPK_RyuZWydeVkSq0CJoLHKZYw7mVbRI10Ip0fEF5qV0Vo_Jq_DB74s8EL28r4Kk0eVSk09mXN-2klEo4237RMx8TmDwV3vVybeb6CRofu9beO3YYQHWJHTW7R4HZJiKwvV7j3CbxrC-5wTM28Swgzro86BcvFn0QL7-pqB8zONRWn4qlY0CdCQj8amfXFdLO_tWGR55kWc-XZoN6_nqAI1Xukh964C3Ro0XyPqhNUNCN_RDrk8IyDN1PLoBpZX2VKB3Is/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACsavYenp5ukHTCOOR9TU6JUBBKnoBR6Zbhd-ESrR2sGJEZPiG-6BKVDsv9dBgszpdx0PXaMukEpf8fR3Zar8d0uohVnBjrdzlgPqUQwiFlDDN8ByphRTNNpgI4bcRkG6c6jWWlMZ9XnHcwgQDvoOfqyMj9uJ_nWpKiwnZIaK7_R-DoJVJlMzcrOC3eJsJUb42Acophx91awDgIKk4xPotcIv_wqTyiiUJfQJt3YVOCtV-997AGgJiKwBFwS1b7Hof6t9BemPslrp_WhHdeakviFzPzPx-WDrprVusxKXlu9J_LAWWqQyZoQvILjfS2zlEs/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACsJi29LpdnG09RxLTsN45wW5Di5F3zpHO7oT4Tg_gWIH6YkaRx6SS-G5C6bctb1YUeXrf18T2aNbWszx1VoUK_R0pCTLE41E4HkTNaHn4iZH9gORM0-ukgE_ZvuDhyj7KK2dAMvPArudUiYuqteLH9f6_nrcWYzkX7SWKonlipihSF4A8R-_jKGU8FuIT-oZEvFtI_1hUTrUQ62nCpZc-4BPs2MaDy3JNxbQ8F1OhQsbu8LJYk_LYqun3yMU3EyN6yMATvUfl2gV3o1mw4IRaDnWm5QEIQe7XAGhXsQyqBeTyRIvo8aDwCdUWR16UQpMYY/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACvvlCWcoUpbm9HatgOVxjQSbjON6mZP25KoHhqngcyXOQJ2whjmR4EZjtw14RIrvOaerfn8cBYLoA2hinC-soBJ9OGBenFBv8SRMXaSA0ite-3LYKI9WETJDZNfPX5yqMtMaYipXkU50HHfw2CQOgUbvRy3xz4bwue6hnI2CLEyGEcw-BWS_RknyWBE0gkBTJyhaXii4KQ_3rIB0AmxIvtw0r56hxWbiY9R4dBWf1miMjH43lOcoYsvOver3PHx-ZP1_8l1GElVQ6t5CKNHN1h-CwgAeRsmQwCBnBoRXOrQicfHVzYKSvn7P64yeJclmxg/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACsYEkyLCjxStv8xCTcQz9L-se000p0c4jHOv5lLrFk94EjA-fe9zk5qdqOXB3t00jZ2sKbhp4EP9B9DDrwDgcsfOP1OsazrA5U3Hq0UT1CsPxpadrOLr-aj6GyvlCf0VCKT2h9R1I7Vfv26D2Und36cNnNYsLKOCUWBmim-_OtcqAH7171H1jS8wqW1LBGpVyEIhwpaKSVJXhRbh4_SnnMxSrIDst4IN0Oqvj0mQ_HzctRo1osv6u6YQgr_I-KSrcDgJ2yt-W4lr7vkRJtlxVGptFySrsuIXYxprbdhnKno0qFuRzK4askN49QZWpQywdQ/p.png",
    "https://previews.dropbox.com/p/thumb/ACs9iWj5ktDvEO2BZn8pUt_yb33s8a9qOMaTuRbtS2qgbNKXbSf9OgIvyR9S4O8QXOF6EgCgcsjOxWQ0bY8VWoX7PsHV7V-075Jh81kq2J4kwby7qZkPU2XTAaW1Iw4TwkprIbinL7p7wiEgtPi_KZ8YbcFRmWadbtQC6Dp5PFv-scgUZWuRf0rI2QQXlwW7F72a_brNucFRsYgnmMujJhkbylT1sUnFvR0RljzrTcnuNHxQggeyWVVzg9EFHf6E7eyhO5cFbgH2te5cHn3qz-QkDYczp1YB2QrlPkTAqVRZZs57kr0wGrftVyfFUiBi9UE/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACuwx3pWLiIkJhqCU_XamZBzKmL-IaO75htRm2v_qFKJNISklA-t3fHVotEyCZqAAwibgGtnm2_dpBLSxLZpLIPuei2-9WIT9QlM6x3d8k0l3OvJOAVa8q10udi5hTPmuXbEIdO8tKZ1o6fDWC4BYzgM8UkSSab8v0VbI_w0ZpGqU3c0iUrDOAeUxMyvraBjFGtgMPxZEDwSUT7LjJboM3OCMkP23SVztGl0gf6peNP4HwrnNOHRCpiGxQzYQwK7XhuH8LHH7ZeNDzpcQaDzUlQTQlT3KS3jO1hcd9zXD2ltGuvOL1LC9IZbAGEMvIn5PhI/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACtVKe-iOpTbChDJ3FvNExekNrdKSk-uuP8sNslEfhJjOWkHfctOmah0WSJKpaMZLDN3mjBj7_aFAQmQR3wGeP_RjvMlHmMg7yx1myxrQRRFJ5VZUr--i2k0dle_y_ZiHu2AbyOnHiJ7Y5Lhl3rc3714x5riiJFvelZo-KHUIdfT_L3HrpDOjG0dFzCKM1w-ZDs_rGnXFfQm1RE2tahBr4DIwINSmosURnuz3zp7VblqyA9f9LxeeHkGj71YabwhBVA_EiogWwXnAYzoz5PHvTg3dcfN-tmVRvwuKOhyUzG0HRiurZVDl0M7bcfkZgnpIHs/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACu6fzY1pxogWAQQ-6o1ODUfW-524iHOazTn2TdBDWgGJRxMCNMvDeXsPQ_0PDxmR61q8M8jEhQAKdqt3dny3tl-k6Rn5mgULXiQH8-t9DpjW3rva-kf7zcaavJAvQQoL6g8rse2vFBFIF1AeaiIr3SQQ2SbUJVeEgX2Ra0Aff5OiNjSsG83sK01OJ4OqdYo3UbKEOebnRRlyxzQRQfAboeZeoZV7v68uJjwBYdm9YUWIZ1d11uirK89QVp-lFJrVXJzma9YKGVGL8R35FDuv7NDogDDLrwo6L5uFXi9uoMG4PWYkNUWxpdcbmKfX05dJiE/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACtgstsQfW67FU2Cle6lZU8OYi44-OcND3E4YRLScftaTokTV5LaNqT_qw742KdUu0l6kfwiHgFmguGqhF89GGml6KLYn1WAbzrgmzOlQBw2YTUanAiTr0iUUxpsLfTi6GVkRx48LiP3UlSZQqZ_rbv0CWg6MWg9PUWUaRXZ-jfPwOsdCVPh7z9jTAnX_LlO80n08C8xhZF7AAl0R-SfMLlIkuzOgyxE_MHEwNZVRgWzEsYJFxLwn3G8AhL6yE7RKYLnORGZzU2r4tgfriZ4kezCihmFL7M7OUKuB1mpCnL1hGREdPD3Y2TY0uh072zCApo/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACuYmBhhF3IcZoPIS5x7joooqAPy9ZwWNiVHC0l4hz8rAgLpoHbOsZAF6BL-cxmnXUMqVEGkRrUP8sGf5u7ALjgyFHs9BinqIC7SrXl3BggHhuFHFcDKFarx_JpiguJlx9AYeraRi6dTMxoMk2uhk7Pentg7hg5gLG0MehERLUeLqJxCJSSC6ZT4PUcUEuVZL4HlgXBLZG3-o9fw77Wgqs3fE7WF3FRD8V3zZ4wNZU7jfY1WofZ4_OPbqAF6IdECQ_M7EoET50SWFuT0anHRO3chg1lrD7sDc0Qpqb6h3AwfCPnlzm88hmuCW8knQvVykOo/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACuD03COHIctj_Ip34h1zbMDKoYlT4lObtxfp0L6HsO5N__TEGAWEb3ibKGPNcIn5q5smC5kKiNgiv7rn9OF1I7mB8d6hyFPNMIJsGw-KxZ5YI-jShqwSwWs3i6au_ILWF8i7QL-WvAq8lAxzxIT_LiDw_wpAkOC6pABVw3KZNP3VBnOml2his_s8203F__QFBCk1xUa3QP0fPwMmphQtyeJATsvf9_M5FwTKesDw6ySx4xXYXUb7yg7X2AyDQduabjrh3KsQj9DKHzCrsILfqUJfbdZ7ki75AWMYKWYGdMfc6eTXMUvtsc5I5lhRw-nBYo/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACsb9M2_2LI8obYS7JandEP-P9eycubiHZxLhHeisa4Z38MwZSehgUnual3c2UXNs1H2It7J3ktkxWFvIwAF7eyllOdnKVXhKh4R-s7wzJat7WrCxf0vw0bBZKlDpjH6e17zum82dHT_i0hnAWTcz2SxwjcZz-JJLejwZX9KdtxmbpPGi0SPGJC30bVu-0T-QCJaSed1K7TpJ4XXkd4-uO3iBbCEeZXvEV5-205QI0RwpDyFCN8HIDZgrPsAOkTehf0UNrCaLKeo-HKxNPZ-AS-Ut2rlxeZuLInxTqCA2gqngmA4RjzfeBNJFbzWAD3NwpM/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACuCWWi7SnFcR_QP_Zq6t-fe5fnt5c7pcTUu7oyy6sI1Col_vsTbPbiQ_MccPxUvgkmlOa3ZDLVufu-vOoxrhOc5QnCC1Dzfbq_NSBszFyXOPrV8RLoqbsdmfqxtZoNADzfq4AYfyJpmU4VPAnq0VwpnXrbZxbxyFtRsH_RS4t4-mJ5geR6a5Qly-h_CLecAvHdxVMXBxN7co-0K8-wbdje8DzSmVq5VtVTfc4m7CoCVtYxIIykrq6i_I3MDo54a_Tk64hmNXig-XnT1CZOo3doDTEfFOgS7PU2LTObSg_yFsY8ouDm7RcCuqPSyaLZvMNM/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACsCzHRsaYYMIKKHUhkauFm9H_0Q5Qy_tKWY8T-CS2X91zgGPp0dyRmbQGP1Kb2U-necHGKesvNOcbzIDpqf2wLWZdUXTZO_UFuh7wkm1aLvxmlYFjQmSaiL_SJA6VCJEaz0nl74jjYgGCHm9x9Fuh9gnHaW-C4jdSa8LaGyLf0YZfqyzSkQWCYs5URFV66sJCyG00IR9AwScvLvXqrJReqNfvj_YzjrOsB1d1WnWsrdPYs5gzFEd5A3MpTCsBM_icp9gu_JIzBMVm9EOPXg5Yt4jgg3DYtqZJrmJRdAj32PF5QVJoSakJZCGSN-Any5ZQc/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACtI8t2ASGdHzBkbs7RrYyhGKUXGopai2N7dJ-gPZTy4_vPrty019lVPGyG6GsraqmqMrre_mR5NCbjglNYnoWIoMTT_tx-dpes6K4hQ9uG0L5_uRrtpymySoUMueBus8EE2rEDjRGrmch_CKHP1xHGmzOmTHa5YrIFqtbkc4emfpXaa5PtOTP-DH3YiAP4Dbdoji4TpYrmpmpYl2csaNkugtPkVQqDIR5j1f-lYlnuUy65m63wbPxU3vqa3vAmf-L7ESLlZxsGv63QvHfwGizMAZHopvB5RYkKSEUl0VlmCRNQGyJCE9hiAXf8RSYq8KPY/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACtMYk9ABHFhKb8F644-9MEwVc6ICHnrnW7QAajF2KrHWJRHzZ__m8JPGYmnuMvFhtZWG4Ywg6dpOxu3E7xSJKWV9i00t4EmK5hog0Y_lHjOGGvz72vr3dOWb8Y7rb39-Qrkpy7oR391YrmSJ43zk7S-p-wWFnSuGWpYXoBmLvZfz-pC5k_I8-iyTMWssutycBe0HvhD-kPoMT6gmoTvVgwWnC0IeFZwA-SDJdixz0KMrA6JHJPgxWM0drqWXa8bDIRo5r4D-JVgB3-M7uanJep9K2srrU0Lj7bUpUvmreonkcQ0QdPDLhFz239AwdtxuoI/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACvwlWczM6DilsXX21W_3pkCkuj2dflrg1r1WkgCJL1C7dHay68IKk3WIdorCg5y8l9wXr9oyMdFxrVNiGyP2yjciTg7WdOp2FoeYYIjD-EKiO4hHMI2e0Xt5GPgqumkl5WZjxyjSO7U6GPqmgGclqcJnsKINLu-mj3yZrhg8YuPVGWDg1Sp4j3jmuyx1TIBTp-UpDv_7PF4cfZsHnMTNqVjNE6MMQCDHJkgvylA8WbHa6SkUJQn1uiOx-gCQK6VycgY-MAEtgE1IWxidoIsToISQVoenxoMGLrO1ga5hHDR84iNqi0mK5nfXZXsddGSM/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACuv60Sv4ajKu8eCOmPsXUHn_oQ4cXVXn0BZ-BgfUkOjOZ8iGy3rVmpD6ApmuU3xu-V4MbJqvwcAI3eC7EcH1PYgXXwSOt7esoNl8ru-OClH1gK_vcSEkV0TmGpEkWQ3Py2BpSfs7eLqZGnvTI4ULHyyyPK1BNgzJKPesrPRnS_VFuzlQ0OxDTcFbKETPzKvR6j1LnZmQncwN6ZBRDx7O62gi_sKC5r7cOuSOcLNg0txCs4F0Eey1zoFxZvzatieGJs-h3gE6hCrm5qraFxZbpItTC9tpEAMuTZczyHD8_Aoo_m1hwrJKt1i3WKWV6UFqBY/p.jpeg"
  ];

  const assigned = new Map();
  let cursor = 4;

  function nextLink(preferredKey) {
    if (preferredKey && assigned.has(preferredKey)) return assigned.get(preferredKey);
    const url = DROPBOX_LINKS[cursor % DROPBOX_LINKS.length];
    if (preferredKey) assigned.set(preferredKey, url);
    cursor++;
    return url;
  }

  function wrap(el) {
    const parentA = el.closest('a');
    if (parentA) {
      parentA.href = 'https://bajabelowsurface.com/#Gallery';
    } else {
      const a = document.createElement('a');
      a.href = 'https://bajabelowsurface.com/#Gallery';
      a.className = 'img-link';
      a.setAttribute('aria-label', 'Open gallery');
      el.replaceWith(a);
      a.appendChild(el);
    }
  }

  document.querySelectorAll('img').forEach(img => {
    const src = (img.getAttribute('src') || '').trim();
    if (!src) return;
    const isLocal = /(^\/|wp-content|bajabelowsurface\.com|static\.wixstatic\.com|^\.\/?)/i.test(src);
    if (!isLocal) return;
    if (!img.closest('.bs-logo') && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    img.decoding = 'async';
    const titleText = img.closest('.services__card')?.querySelector('.services__title, h3')?.textContent?.toLowerCase() || '';
    const key = (titleText.match(/mobula|whale.?shark|balandra|esp[ií]ritu|pulmo|sea.?lion|socorro|manta/) || [null])[0];
    const cloud = nextLink(key);
    img.src = cloud;
    wrap(img);
  });

  document.querySelectorAll('.services__img, .parallax-card, .tile, [style*="background"], [style*="--img"]').forEach(el => {
    let url = '';
    if (el.style.getPropertyValue('--img')) {
      url = el.style.getPropertyValue('--img');
    } else {
      url = el.style.backgroundImage || el.style.background || '';
    }
    if (!/url\(/i.test(url)) return;
    if (!/(wp-content|bajabelowsurface\.com|static\.wixstatic\.com|^\/|^\.\/)/i.test(url)) return;
    const titleText = el.closest('.services__card')?.querySelector('.services__title, h3')?.textContent?.toLowerCase() || '';
    const key = (titleText.match(/mobula|whale.?shark|balandra|esp[ií]ritu|pulmo|sea.?lion|socorro|manta/) || [null])[0];
    const cloud = nextLink(key);
    if (el.style.getPropertyValue('--img')) {
      el.style.setProperty('--img', `url("${cloud}")`);
    } else {
      el.style.backgroundImage = `url("${cloud}")`;
    }
    wrap(el);
  });
})();
