// @ts-nocheck // TODO: Remove this and add missing translations
import type { Language } from '../types.js'

export const az: Language = {
  dateFNSKey: 'az',
  translations: {
    authentication: {
      account: 'Hesab',
      accountOfCurrentUser: 'Cari istifadəçinin hesabı',
      alreadyActivated: 'Artıq Aktivləşdirilib',
      alreadyLoggedIn: 'Artıq daxil olunub',
      apiKey: 'API Açarı',
      authenticated: 'Doğrulandı',
      backToLogin: 'Girişə qayıt',
      beginCreateFirstUser: 'Başlamaq üçün ilk istifadəçinizi yaradın.',
      changePassword: 'Parolu dəyişdir',
      checkYourEmailForPasswordReset:
        'Parolunuzu təhlükəsiz şəkildə sıfırlamağa imkan verəcək link üçün e-poçt ünvanınızı yoxlayın.',
      confirmGeneration: 'Generasiyani təsdiqlə',
      confirmPassword: 'Şifrəni təsdiq et',
      createFirstUser: 'İlk istifadəçini yaradın',
      emailNotValid: 'Təqdim olunan e-poçt etibarlı deyil',
      emailSent: 'E-poçt göndərildi',
      enableAPIKey: 'API açarını aktivləşdir',
      failedToUnlock: 'Kilidi açmaq alınmadı',
      forceUnlock: 'Kilidi zorla aç',
      forgotPassword: 'Şifrəni unutmusan',
      forgotPasswordEmailInstructions:
        'Zəhmət olmasa, e-poçt ünvanınızı aşağıda daxil edin. Siz parolunuzu necə sıfırlamaq barədə təlimatları olan e-poçt mesajı alacaqsınız.',
      forgotPasswordQuestion: 'Şifrəni unutmusan?',
      generate: 'Yarad',
      generateNewAPIKey: 'Yeni API açarı yarad',
      generatingNewAPIKeyWillInvalidate:
        'Yeni API açarının yaradılması əvvəlki açarı etibarsız edəcək. Davam etmək istədiyinizə əminsiniz?',
      lockUntil: 'Klidklə',
      logBackIn: 'Yenidən daxil ol',
      logOut: 'Çıxış et',
      loggedIn: 'Başqa istifadəçi ilə daxil olmaq üçün əvvəlcə çıxış etməlisiniz.',
      loggedInChangePassword:
        'Parolu dəyişdirmək üçün hesabınıza get və orada şifrənizi redaktə edin.',
      loggedOutInactivity: 'Hərəkətsizlik səbəbindən sistemdən çıxmısınız.',
      loggedOutSuccessfully: 'Siz uğurla çıxış etdiniz.',
      login: 'Giriş',
      loginAttempts: 'Giriş cəhdləri',
      loginUser: 'Giriş istifadəçisi',
      loginWithAnotherUser: 'Başqa istifadəçi ilə daxil olmaq üçün əvvəlcə çıxış etməlisiniz.',
      logout: 'Çıxış',
      logoutUser: 'Sistemdən çıxış',
      newAPIKeyGenerated: 'Yeni API Açarı Yaradıldı.',
      newAccountCreated:
        'Sizin üçün yeni hesab yaradıldı. Zəhmət olmasa, e-poçtunuzu doğrulamaq üçün aşağıdakı linke klikləyin: <a href="{{verificationURL}}">{{verificationURL}}</a>. E-poçtunuzu doğruladıqdan sonra uğurla daxil ola bilərsiniz.',
      newPassword: 'Yeni şifrə',
      resetPassword: 'Şifrəni sıfırla',
      resetPasswordExpiration: 'Şifrənin müddətini sıfırla',
      resetPasswordToken: 'Şifrə Tokenini Sıfırla',
      resetYourPassword: 'Şifrənizi sıfırlayın',
      stayLoggedIn: 'Sistemdə qal',
      successfullyUnlocked: 'Uğurla kilidi açıldı',
      unableToVerify: 'Doğrulamaq mümkün deyil',
      verified: 'Doğrulanmış',
      verifiedSuccessfully: 'Uğurla doğrulandı',
      verify: 'Doğrula',
      verifyUser: 'İstifadəçini doğrula',
      verifyYourEmail: 'E-poçtunuzu doğrulayın',
      youAreInactive:
        'Siz bir müddətdir aktiv deyilsiniz və tezliklə öz təhlükəsizliyiniz üçün avtomatik olaraq sistemdən çıxacaqsınız. Daxil olmaq istərdinizmi?',
      youAreReceivingResetPassword:
        'Siz (və ya başqası) hesabınız üçün parolun sıfırlanmasını tələb etdiyiniz üçün bunu alırsınız. Prosesi tamamlamaq üçün zəhmət olmasa aşağıdakı linkə klikləyin:',
      youDidNotRequestPassword:
        'Əgər siz bunu tələb etməmisinizsə, lütfən, bu e-poçtu nəzərə almayın və şifrəniz dəyişilməz qalacaq.',
    },
    error: {
      accountAlreadyActivated: 'Bu hesab artıq aktivləşdirilib.',
      autosaving: 'Bu sənədin avto yadda saxlanılması zamanı problem yarandı.',
      correctInvalidFields: 'Zəhmət olmasa, yanlış sahələri düzəlt.',
      deletingFile: 'Faylın silinməsində xəta baş verdi.',
      deletingTitle:
        '{{title}} silinərkən xəta baş verdi. Zəhmət olmasa, bağlantınızı yoxlayın və yenidən cəhd edin.',
      emailOrPasswordIncorrect: 'Təqdim olunan e-poçt və ya şifrə yanlışdır.',
      followingFieldsInvalid_many: 'Aşağıdakı sahələr yanlışdır:',
      followingFieldsInvalid_one: 'Aşağıdakı sahə yanlışdır:',
      followingFieldsInvalid_other: 'Aşağıdaki sahələr yanlışdır:',
      incorrectCollection: 'Yanlış Kolleksiya',
      invalidFileType: 'Yanlış fayl növü',
      invalidFileTypeValue: 'Yanlış fayl növü: {{value}}',
      loadingDocument: '{{id}} ID-li sənədin yüklənməsində problem baş verdi.',
      localesNotSaved_one: 'Aşağıdakı yerləşdirmə saxlanıla bilmədi:',
      localesNotSaved_other: 'Aşağıdakı yerləşdirmələr saxlanıla bilmədi:',
      missingEmail: 'E-poçt adresi çatışmır.',
      missingIDOfDocument: 'Yeniləmək üçün sənədin ID-si çatışmır.',
      missingIDOfVersion: 'Versiyanın ID-si çatışmır.',
      missingRequiredData: 'Tələb olunan məlumat çatışmır.',
      noFilesUploaded: 'Heç bir fayl yüklənilməyib.',
      noMatchedField: '"{{label}}" üçün uyğun sahə tapılmadı',
      noUser: 'İstifadəçi Yoxdur',
      notAllowedToAccessPage: 'Bu səhifəyə girməyə icazəniz yoxdur.',
      notAllowedToPerformAction: 'Bu əməliyyatı icra etməyə icazəniz yoxdur.',
      notFound: 'Tələb olunan resurs tapılmadı.',
      previewing: 'Bu sənədin ön baxışı zamanı problem yarandı.',
      problemUploadingFile: 'Faylın yüklənməsi zamanı problem yarandı.',
      tokenInvalidOrExpired: 'Token ya yanlışdır və ya müddəti bitib.',
      unPublishingDocument: 'Bu sənədin nəşrini ləğv etmək zamanı problem baş verdi.',
      unableToDeleteCount: '{{count}} dən {{total}} {{label}} silinə bilmir.',
      unableToUpdateCount: '{{count}} dən {{total}} {{label}} yenilənə bilmir.',
      unauthorized: 'İcazəniz yoxdur, bu tələbi yerinə yetirmək üçün daxil olmalısınız.',
      unknown: 'Naməlum bir xəta baş verdi.',
      unspecific: 'Xəta baş verdi.',
      userLocked: 'Bu istifadəçi çoxsaylı uğursuz giriş cəhdləri səbəbindən kilidlənib.',
      valueMustBeUnique: 'Dəyər təkrar olmamalıdır',
      verificationTokenInvalid: 'Doğrulama tokenı yanlışdır.',
    },
    fields: {
      addLabel: '{{label}} əlavə et',
      addLink: 'Keçid əlavə et',
      addNew: 'Yenisini əlavə et',
      addNewLabel: 'Yeni {{label}} əlavə et',
      addRelationship: 'Relationship əlavə et',
      addUpload: 'Yükləmə əlavə et',
      block: 'blok',
      blockType: 'Blok Növü',
      blocks: 'bloklar',
      chooseBetweenCustomTextOrDocument:
        "Xüsusi mətn URL'si daxil etmək və ya başqa bir sənədə keçid yaratmaq arasında seçim edin.",
      chooseDocumentToLink: 'Keçid yaratmaq üçün sənəd seçin',
      chooseFromExisting: 'Mövcuddan seçin',
      chooseLabel: '{{label}} seçin',
      collapseAll: 'Hamısını Bağla',
      customURL: 'Xüsusi URL',
      editLabelData: '{{label}} məlumatını redaktə et',
      editLink: 'Keçidi redaktə et',
      editRelationship: 'Relationship redaktə et',
      enterURL: 'URL daxil edin',
      internalLink: 'Daxili Keçid',
      itemsAndMore: '{{items}} və daha {{count}} nəfər',
      labelRelationship: '{{label}} Relationship',
      latitude: 'Enlik',
      linkType: 'Keçid Növü',
      linkedTo: '<0>{{label}}</0> ilə əlaqəli',
      longitude: 'Uzunluq',
      newLabel: 'Yeni {{label}}',
      openInNewTab: 'Yeni sekmede aç',
      passwordsDoNotMatch: 'Şifrələr uyğun gəlmir.',
      relatedDocument: 'Əlaqəli Sənəd',
      relationTo: 'Relationship',
      removeRelationship: 'Relationship sil',
      removeUpload: 'Yükləməni sil',
      saveChanges: 'Dəyişiklikləri saxla',
      searchForBlock: 'Blok üçün axtarış',
      selectExistingLabel: 'Mövcud {{label}} seçin',
      selectFieldsToEdit: 'Redaktə ediləcək sahələri seçin',
      showAll: 'Hamısını Göstər',
      swapRelationship: 'Relationship dəyiş',
      swapUpload: 'Yükləməni dəyiş',
      textToDisplay: 'Göstəriləcək mətn',
      toggleBlock: 'Bloku keç',
      uploadNewLabel: 'Yeni {{label}} yüklə',
    },
    general: {
      aboutToDelete: 'Siz {{label}} <1>{{title}}</1> silməyə hazırsınız. Eminsiniz?',
      aboutToDeleteCount_many: 'Siz {{count}} {{label}} silməyə hazırsınız.',
      aboutToDeleteCount_one: 'Siz {{count}} {{label}} silməyə hazırsınız.',
      aboutToDeleteCount_other: 'Siz {{count}} {{label}} silməyə hazırsınız.',
      addBelow: 'Aşağıya əlavə et',
      addFilter: 'Filter əlavə et',
      adminTheme: 'Admin Mövzusu',
      and: 'Və',
      applyChanges: 'Dəyişiklikləri Tətbiq Edin',
      ascending: 'Artan',
      automatic: 'Avtomatik',
      backToDashboard: 'Panelə qayıdın',
      cancel: 'Ləğv et',
      changesNotSaved:
        'Dəyişiklikləriniz saxlanılmayıb. İndi çıxsanız, dəyişikliklərinizi itirəcəksiniz.',
      close: 'Bağla',
      collapse: 'Bağla',
      collections: 'Kolleksiyalar',
      columnToSort: 'Sıralamağa sütun',
      columns: 'Sütunlar',
      confirm: 'Təsdiqlə',
      confirmDeletion: 'Silməni təsdiqlə',
      confirmDuplication: 'Dublikasiyanı təsdiqlə',
      copied: 'Kopyalandı',
      copy: 'Kopyala',
      create: 'Yarat',
      createNew: 'Yeni yarat',
      createNewLabel: 'Yeni {{label}} yarat',
      created: 'Yaradıldı',
      createdAt: 'Yaradıldığı tarix',
      creating: 'Yaradılır',
      creatingNewLabel: 'Yeni {{label}} yaradılır',
      dark: 'Tünd',
      dashboard: 'Panel',
      delete: 'Sil',
      deletedCountSuccessfully: '{{count}} {{label}} uğurla silindi.',
      deletedSuccessfully: 'Uğurla silindi.',
      deleting: 'Silinir...',
      depth: 'Dərinlik',
      descending: 'Azalan',
      deselectAllRows: 'Bütün sıraları seçimi ləğv edin',
      document: 'Sənəd',
      documents: 'Sənədlər',
      duplicate: 'Dublikat',
      duplicateWithoutSaving: 'Dəyişiklikləri saxlamadan dublikatla',
      edit: 'Redaktə et',
      editLabel: '{{label}} redaktə et',
      editing: 'Redaktə olunur',
      editingLabel_many: '{{count}} {{label}} redaktə olunur',
      editingLabel_one: '{{count}} {{label}} redaktə olunur',
      editingLabel_other: '{{count}} {{label}} redaktə olunur',
      email: 'Elektron poçt',
      emailAddress: 'Elektron poçt ünvanı',
      enterAValue: 'Bir dəyər daxil edin',
      error: 'Xəta',
      errors: 'Xətalar',
      fallbackToDefaultLocale: 'Standart lokalə keçid',
      false: 'Yalan',
      filter: 'Filter',
      filterWhere: '{{label}} filtrlə',
      filters: 'Filtərlər',
      globals: 'Qloballar',
      language: 'Dil',
      lastModified: 'Son dəyişdirildi',
      leaveAnyway: 'Heç olmasa çıx',
      leaveWithoutSaving: 'Saxlamadan çıx',
      light: 'Açıq',
      livePreview: 'Öncədən baxış',
      loading: 'Yüklənir',
      locale: 'Lokal',
      locales: 'Dillər',
      menu: 'Menyu',
      moveDown: 'Aşağı hərəkət et',
      moveUp: 'Yuxarı hərəkət et',
      newPassword: 'Yeni şifrə',
      noFiltersSet: 'Filter təyin edilməyib',
      noLabel: '<Heç bir {{label}}>',
      noOptions: 'Heç bir seçim yoxdur',
      noResults:
        'Heç bir {{label}} tapılmadı. Ya hələ {{label}} yoxdur, ya da yuxarıda göstərdiyiniz filtrlərə uyğun gəlmir.',
      noValue: 'Dəyər yoxdur',
      none: 'Heç bir',
      notFound: 'Tapılmadı',
      nothingFound: 'Heç nə tapılmadı',
      of: 'dən',
      open: 'Aç',
      or: 'Və ya',
      order: 'Sıra',
      pageNotFound: 'Səhifə tapılmadı',
      password: 'Şifrə',
      payloadSettings: 'Payload Parametrləri',
      perPage: 'Hər səhifədə: {{limit}}',
      remove: 'Sil',
      reset: 'Yenidən başlat',
      row: 'Sətir',
      rows: 'Sətirlər',
      save: 'Saxla',
      saving: 'Saxlanılır...',
      searchBy: '{{label}} ilə axtar',
      selectAll: 'Bütün {{count}} {{label}} seç',
      selectAllRows: 'Bütün sıraları seçin',
      selectValue: 'Dəyər seçin',
      selectedCount: '{{count}} {{label}} seçildi',
      showAllLabel: 'Bütün {{label}}-ı göstər',
      sorryNotFound: 'Üzr istəyirik - sizin tələbinizə uyğun heç nə yoxdur.',
      sort: 'Sırala',
      sortByLabelDirection: '{{label}} {{direction}} ilə sırala',
      stayOnThisPage: 'Bu səhifədə qal',
      submissionSuccessful: 'Təqdimat uğurlu oldu.',
      submit: 'Təqdim et',
      successfullyCreated: '{{label}} uğurla yaradıldı.',
      successfullyDuplicated: '{{label}} uğurla dublikatlandı.',
      thisLanguage: 'Azərbaycan dili',
      titleDeleted: '{{label}} "{{title}}" uğurla silindi.',
      true: 'Doğru',
      unauthorized: 'İcazəsiz',
      unsavedChangesDuplicate:
        'Saxlanılmamış dəyişiklikləriniz var. Dublikatla davam etmək istəyirsiniz?',
      untitled: 'Başlıqsız',
      updatedAt: 'Yeniləndiyi tarix',
      updatedCountSuccessfully: '{{count}} {{label}} uğurla yeniləndi.',
      updatedSuccessfully: 'Uğurla yeniləndi.',
      updating: 'Yenilənir',
      uploading: 'Yüklənir',
      user: 'İstifadəçi',
      users: 'İstifadəçilər',
      value: 'Dəyər',
      welcome: 'Xoş gəldiniz',
    },
    operators: {
      contains: 'daxilində',
      equals: 'bərabərdir',
      exists: 'mövcuddur',
      isGreaterThan: 'dən böyük',
      isGreaterThanOrEqualTo: 'böyük və ya bərabər',
      isIn: 'daxildir',
      isLessThan: 'dən kiçik',
      isLessThanOrEqualTo: 'kiçik və ya bərabər',
      isLike: 'kimi',
      isNotEqualTo: 'bərabər deyil',
      isNotIn: 'daxil deyil',
      near: 'yaxın',
    },
    upload: {
      crop: 'Məhsul',
      cropToolDescription:
        'Seçilmiş sahənin köşələrini sürükləyin, yeni bir sahə çəkin və ya aşağıdakı dəyərləri düzəltin.',
      dragAndDrop: 'Faylı buraya sürükləyin və buraxın',
      dragAndDropHere: 'və ya faylı buraya sürükləyin və buraxın',
      editImage: 'Şəkili Redaktə Et',
      fileName: 'Faylın Adı',
      fileSize: 'Faylım Ölçüsü',
      focalPoint: 'Mərkəzi Nöqtə',
      focalPointDescription:
        'Fokus nöqtəsini birbaşa önizləməyə sürükləyin və ya aşağıdakı dəyərləri düzəltin.',
      height: 'Hündürlük',
      lessInfo: 'Daha az məlumat',
      moreInfo: 'Daha çox məlumat',
      previewSizes: 'Öncədən baxış ölçüləri',
      selectCollectionToBrowse: 'Gözdən keçirmək üçün bir Kolleksiya seçin',
      selectFile: 'Fayl seçin',
      setCropArea: 'Məhsul sahəsini təyin et',
      setFocalPoint: 'Fokus nöqtəsi təyin et',
      sizes: 'Ölçülər',
      sizesFor: '{{label}} üçün ölçülər',
      width: 'En',
    },
    validation: {
      emailAddress: 'Xahiş edirik doğru elektron poçt ünvanını daxil edin.',
      enterNumber: 'Xahiş edirik doğru nömrəni daxil edin.',
      fieldHasNo: 'Bu sahədə heç bir {{label}} yoxdur',
      greaterThanMax: '{{value}} icazə verilən maksimal {{label}} olan {{max}}-dən böyükdür.',
      invalidInput: 'Bu sahə yanlış daxil edilmişdir.',
      invalidSelection: 'Bu sahədə yanlış seçim edilmişdir.',
      invalidSelections: 'Bu sahədə aşağıdakı yanlış seçimlər edilmişdir:',
      lessThanMin: '{{value}} icazə verilən minimal {{label}} olan {{min}}-dən kiçikdir.',
      limitReached: 'Limitə çatdınız, yalnız {{max}} element əlavə edilə bilər.',
      longerThanMin: 'Bu dəyər {{minLength}} simvoldan uzun olmalıdır.',
      notValidDate: '"{{value}}" doğru tarix deyil.',
      required: 'Bu sahə mütləq doldurulmalıdır.',
      requiresAtLeast: 'Bu sahə ən azı {{count}} {{label}} tələb edir.',
      requiresNoMoreThan: 'Bu sahə {{count}} {{label}}-dan çox olmamalıdır.',
      requiresTwoNumbers: 'Bu sahə iki nömrə tələb edir.',
      shorterThanMax: 'Bu dəyər {{maxLength}} simvoldan qısa olmalıdır.',
      trueOrFalse: 'Bu sahə yalnız doğru və ya yanlış ola bilər.',
      validUploadID: 'Bu sahə doğru yükləmə ID-si deyil.',
    },
    version: {
      type: 'Növ',
      aboutToPublishSelection: 'Seçimdə olan bütün {{label}}-i dərc etməyə hazırsınız. Əminsiniz?',
      aboutToRestore:
        'Bu {{label}} sənədini {{versionDate}} tarixindəki vəziyyətinə bərpa etmək üzrəsiniz.',
      aboutToRestoreGlobal:
        'Qlobal {{label}}-i {{versionDate}} tarixindəki vəziyyətinə bərpa etmək üzrəsiniz.',
      aboutToRevertToPublished:
        'Bu sənədin dəyişikliklərini dərc edilmiş vəziyyətinə qaytarmağa hazırsınız. Əminsiniz?',
      aboutToUnpublish: 'Bu sənədi dərcdən çıxartmağa hazırsınız. Əminsiniz?',
      aboutToUnpublishSelection:
        'Seçimdə olan bütün {{label}}-i dərcdən çıxartmağa hazırsınız. Əminsiniz?',
      autosave: 'Avtomatik yadda saxlama',
      autosavedSuccessfully: 'Uğurla avtomatik olaraq yadda saxlandı.',
      autosavedVersion: 'Avtomatik yadda saxlanmış versiya',
      changed: 'Dəyişdirildi',
      compareVersion: 'Versiyanı müqayisə et:',
      confirmPublish: 'Dərci təsdiq edin',
      confirmRevertToSaved: 'Yadda saxlanana qayıtmağı təsdiq edin',
      confirmUnpublish: 'Dərcdən çıxartmağı təsdiq edin',
      confirmVersionRestoration: 'Versiyanın bərpasını təsdiq edin',
      currentDocumentStatus: 'Cari {{docStatus}} sənədi',
      draft: 'Qaralama',
      draftSavedSuccessfully: 'Qaralama uğurla yadda saxlandı.',
      lastSavedAgo: '{{distance}} əvvəl son yadda saxlanıldı',
      noFurtherVersionsFound: 'Başqa versiyalar tapılmadı',
      noRowsFound: 'Heç bir {{label}} tapılmadı',
      preview: 'Öncədən baxış',
      problemRestoringVersion: 'Bu versiyanın bərpasında problem yaşandı',
      publish: 'Dərc et',
      publishChanges: 'Dəyişiklikləri dərc et',
      published: 'Dərc edilmiş',
      publishing: 'Nəşr',
      restoreThisVersion: 'Bu versiyanı bərpa et',
      restoredSuccessfully: 'Uğurla bərpa edildi.',
      restoring: 'Bərpa olunur...',
      revertToPublished: 'Dərc edilmişə qayıt',
      reverting: 'Qayıdılır...',
      saveDraft: 'Qaralamayı yadda saxla',
      selectLocales: 'Göstərmək üçün lokalları seçin',
      selectVersionToCompare: 'Müqayisə üçün bir versiya seçin',
      showLocales: 'Lokalları göstər:',
      showingVersionsFor: 'Göstərilən versiyalar üçün:',
      status: 'Status',
      unpublish: 'Dərcdən çıxart',
      unpublishing: 'Dərcdən çıxarılır...',
      version: 'Versiya',
      versionCount_many: '{{count}} versiya tapıldı',
      versionCount_none: 'Versiya tapılmadı',
      versionCount_one: '{{count}} versiya tapıldı',
      versionCount_other: '{{count}} versiya tapıldı',
      versionCreatedOn: '{{version}} tarixində yaradıldı:',
      versionID: 'Versiyanın ID-si',
      versions: 'Versiyalar',
      viewingVersion: '{{entityLabel}} {{documentTitle}} üçün versiyanı göstərir',
      viewingVersionGlobal: 'Qlobal {{entityLabel}} üçün versiyanı göstərir',
      viewingVersions: '{{entityLabel}} {{documentTitle}} üçün versiyaları göstərir',
      viewingVersionsGlobal: 'Qlobal {{entityLabel}} üçün versiyaları göstərir',
    },
  },
}
